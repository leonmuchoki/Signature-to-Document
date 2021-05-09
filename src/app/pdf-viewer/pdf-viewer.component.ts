import { Component, OnInit, ViewChild, ElementRef, Pipe, PipeTransform, AfterViewInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import * as pdfjsLib from 'pdfjs-dist';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas"
import domtoimage from 'dom-to-image';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit,AfterViewInit  {
  pdfSrc = "https://res.cloudinary.com/dze7ap73i/image/upload/v1619984699/purchase-order-form-for-free-download_znmojw.pdf";
  pdfDoc = null
  pageNum : number = 1
  pageRendering : boolean = false
  pageNumPending = null
  scale : number = 1.2

  image = new Image();
  imageSignature = new Image();

  @ViewChild('pdfcanvas', { static: true })
  pdfcanvas: ElementRef<HTMLCanvasElement>;  

  @ViewChild('btnPrev')
  btnPrevRef: ElementRef<HTMLButtonElement>

  @ViewChild('btnNext')
  btnNextRef: ElementRef<HTMLButtonElement>

  @ViewChild('pageNum')
  pageNumRef: ElementRef<HTMLSpanElement>

  @ViewChild('pageCount')
  pageCountRef: ElementRef<HTMLSpanElement>

  

  //@ViewChild('papple', { static: true }) 
  //papple: ElementRef<HTMLImageElement>;  
  //@ViewChild("papple", {read: ElementRef}) papple: ElementRef;

  constructor() { }

  ngOnInit() {
    // Prepare canvas using PDF page dimensions
     //this.createPdf();
    
  }

  ngAfterViewInit() {
    //this.loadPdfjs();
    this.loadPdfjs();
  }

  loadPdfjs() : void {
    /**
     * Asynchronously downloads PDF.
    */
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js';
    let pageCountEl = this.pageCountRef.nativeElement;

    pdfjsLib.getDocument(this.pdfSrc).promise.then((pdfDoc_) => {
      this.pdfDoc = pdfDoc_;
      //document.getElementById('page_count').textContent = this.pdfDoc.numPages;
      pageCountEl.innerText = "" + this.pdfDoc.numPages;
      // Initial/first page rendering
      this.renderPage(this.pageNum);
    })
  }
  
  renderPage(num) : void {
    this.pageRendering = true;
    let ctx: CanvasRenderingContext2D = this.pdfcanvas.nativeElement.getContext('2d');

    // Using promise to fetch the page
    this.pdfDoc.getPage(num).then((page) => {
      var viewport = page.getViewport({scale: this.scale});
      this.pdfcanvas.nativeElement.height = viewport.height;
      this.pdfcanvas.nativeElement.width = viewport.width;
  
      // Render PDF page into canvas context
      var renderContext = {
        canvasContext: ctx,
        viewport: viewport
      };
      var renderTask = page.render(renderContext);
  
      // Wait for rendering to finish
      renderTask.promise.then(() => {
        this.pageRendering = false;
        if (this.pageNumPending !== null) {
          // New page rendering is pending
          this.renderPage(this.pageNumPending);
          this.pageNumPending = null;
        }
      });
    });
  
    // Update page counters
    this.pageNumRef.nativeElement.innerText = num; 
  }

  /**
 * If another page rendering in progress, waits until the rendering is
 * finised. Otherwise, executes rendering immediately.
 */
queueRenderPage(num) : void {
  if (this.pageRendering) {
    this.pageNumPending = num;
  } else {
    this.renderPage(num);
  }
}

/**
 * Displays previous page.
 */
 onPrevPage() : void {
  if (this.pageNum <= 1) {
    return;
  }
  this.pageNum--;
  this.queueRenderPage(this.pageNum);
}

/**
 * Displays next page.
 */
 onNextPage() : void {
  if (this.pageNum >= this.pdfDoc.numPages) {
    return;
  }
  this.pageNum++;
  this.queueRenderPage(this.pageNum);
}
  

  elementDropped(signatureData) : void {
    console.log("inside elementDropped")
    console.log(signatureData);

    var context: CanvasRenderingContext2D = this.pdfcanvas.nativeElement.getContext('2d');
    
    let x = this.pdfcanvas.nativeElement.getBoundingClientRect().left;
    let y = this.pdfcanvas.nativeElement.getBoundingClientRect().top;
    let rgt = this.pdfcanvas.nativeElement.getBoundingClientRect().right;
    let btm = this.pdfcanvas.nativeElement.getBoundingClientRect().right;

    let x_off = this.pdfcanvas.nativeElement.offsetLeft;
    let y_off = this.pdfcanvas.nativeElement.offsetTop;
   // x = signatureData["x"] - x;
    //y = signatureData["y"] - y;
    
    //small hack for positioning due to image white spaces...todo later..
    x_off = x_off + 40;
    y_off = y_off + 50;
    //console.log("getBoundingClientRect x:" + x + "  y: " + y + " right:" + rgt + "  bottom: " + btm)
    //console.log("offset x:" + this.pdfcanvas.nativeElement.offsetLeft + "  y: " + this.pdfcanvas.nativeElement.offsetTop + " windowscrollx:" + window.scrollX + "  windowscrollY: " + window.scrollY)
    

    const imgSignEl = this.imageSignature;
    this.imageSignature.onload = function(){   // put this above img.src 
      context.drawImage(imgSignEl, signatureData["x"] - x_off, signatureData["y"]-y_off + window.scrollY,100,100);
      console.log("image widht: " + imgSignEl.width + " image height: " +imgSignEl.height);
  };
    this.imageSignature.src = signatureData["imageDataUrl"];
    //crop white spaces
    //this.imageSignature.src = this.cropImageWhiteSpaces();
  }

  savePdf() : void {
    const divHeight = this.pdfcanvas.nativeElement.clientHeight;
    const divWidth = this.pdfcanvas.nativeElement.clientWidth;
    const options = { background: 'white', width: divWidth, height: divHeight };
  
    domtoimage.toPng(this.pdfcanvas.nativeElement, options).then((imgData) => {
      const doc = new jsPDF('p', 'mm', [divWidth, divHeight]);
      const imgProps = doc.getImageProperties(imgData);
      const pdfWidth = doc.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      doc.save('pdfDocument.pdf');
    });
  }

  cropImageWhiteSpaces() : string {
    //let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    let croppedCanvas:HTMLCanvasElement = document.createElement('canvas');
    let croppedCtx:CanvasRenderingContext2D = croppedCanvas.getContext("2d");

    croppedCanvas.width = this.imageSignature.width//canvas.width;
    croppedCanvas.height = this.imageSignature.height;
    console.log("croppedCanvas.width:" + this.imageSignature.width + " this.imageSignature.height:" + this.imageSignature.height)
    croppedCtx.drawImage(this.imageSignature, 0, 0);

    let w = croppedCanvas.width;
    let h = croppedCanvas.height;
    let pix = {x:[], y:[]};
    let imageData = croppedCtx.getImageData(0,0,w,h);
    let index = 0;

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        index = (y * w + x) * 4;
        if (imageData.data[index+3] > 0) {
          pix.x.push(x);
          pix.y.push(y);
        }
      }
    }

    pix.x.sort((a,b) => a-b);
    pix.y.sort((a,b) => a-b);
    let n = pix.x.length-1;

    w = pix.x[n] - pix.x[0];
    h = pix.y[n] - pix.y[0];
    var cut = croppedCtx.getImageData(pix.x[0], pix.y[0], w, h);

    croppedCanvas.width = w;
    croppedCanvas.height = h;
    croppedCtx.putImageData(cut, 0, 0);

    return croppedCanvas.toDataURL();
  }

}