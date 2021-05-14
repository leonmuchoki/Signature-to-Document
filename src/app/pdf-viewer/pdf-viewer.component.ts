import { Component, OnInit, ViewChild, ElementRef, Pipe, PipeTransform, 
         AfterViewInit, ComponentFactoryResolver,Renderer2 } 
from '@angular/core';
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
  pageCount : number = 0
  pageRendering : boolean = false
  pageNumPending = null
  scale : number = 1.2
  fileName = '';
  signedPage : number
  pdfObj : Object = {}
  currCanvasID : string

  currPage = 1; //Pages are 1-based not 0-based
  numPages = 0;

  image = new Image();
  imageSignature = new Image();

  @ViewChild('pdfcanvas', { static: true })
  pdfcanvas: ElementRef<HTMLCanvasElement>;   
  
  @ViewChild('canvasContainer')
  canvasContainerRef: ElementRef<HTMLDivElement>

/*   @ViewChild('btnPrev')
  btnPrevRef: ElementRef<HTMLButtonElement>

  @ViewChild('btnNext')
  btnNextRef: ElementRef<HTMLButtonElement>

  @ViewChild('pageNum')
  pageNumRef: ElementRef<HTMLSpanElement>
*/
  @ViewChild('pageCount')
  pageCountRef: ElementRef<HTMLSpanElement> 

  

  //@ViewChild('papple', { static: true }) 
  //papple: ElementRef<HTMLImageElement>;  
  //@ViewChild("papple", {read: ElementRef}) papple: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    // Prepare canvas using PDF page dimensions
     //this.createPdf();
    
  }

  ngAfterViewInit() {
    //this.loadPdfjs();
    //this.loadPdfjs();
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
      this.pageCount = +this.pdfDoc.numPages;
      // Initial/first page rendering
      this.renderPage(this.pageNum);
    })
  }
  
  renderPage(num) : void {
    this.pageRendering = true;

    const canvas = this.renderer.createElement("canvas" );
    this.renderer.appendChild(this.canvasContainerRef.nativeElement, canvas);
    // Set the id of the div
    this.renderer.setProperty(canvas, 'id', "canvas_" + num);
    this.renderer.setStyle(canvas,'margin-bottom','10px');
    this.renderer.setStyle(canvas,'background-color','darkgrey');
    canvas.onmouseover = (e) => { this.currCanvasID=canvas.id;console.log("on mouse over..." + this.currCanvasID)};
    //canvas.ondragenter = (e) => { e.preventDefault();e.dataTransfer.dropEffect = 'copy'; console.log("on drag over..."); return false;};
    //canvas.addEventListener("ondragenter", (e) => { e.preventDefault(); console.log(".....droppeed")});

    //this.canvasContainerRef.nativeElement.appendChild(canvas);

    let ctx: CanvasRenderingContext2D = canvas.getContext('2d');//this.pdfcanvas.nativeElement.getContext('2d');
 
    // Using promise to fetch the page
    this.pdfDoc.getPage(num).then((page) => {
      var viewport = page.getViewport({scale: this.scale});
      canvas.height = viewport.height;//this.pdfcanvas.nativeElement.height = viewport.height;
      canvas.width = viewport.width;//this.pdfcanvas.nativeElement.width = viewport.width;
  
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

        if (this.pageNum >= this.pdfDoc.numPages) {
          return;
        }
        this.pageNum++;
        this.queueRenderPage(this.pageNum);
      });
    });
  
    // Update page counters
    //this.pageNumRef.nativeElement.innerText = num; 
  }

  getCanvasID(e) : any {
    console.log("getCanvasid....");
    console.log(e);
    return false;
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
    console.log("inside elementDropped" + this.currCanvasID)
    console.log(signatureData);

    this.signedPage = this.pageNum;

    const canvEl = this.renderer.selectRootElement("#" + this.currCanvasID);//document.getElementById(this.currCanvasID);
    const context: CanvasRenderingContext2D = canvEl.getContext('2d');//this.pdfcanvas.nativeElement.getContext('2d');
    
/*     let x = this.pdfcanvas.nativeElement.getBoundingClientRect().left;
    let y = this.pdfcanvas.nativeElement.getBoundingClientRect().top;
    let rgt = this.pdfcanvas.nativeElement.getBoundingClientRect().right;
    let btm = this.pdfcanvas.nativeElement.getBoundingClientRect().right; */

    let x_off = canvEl.offsetLeft;
    let y_off = canvEl.offsetTop;
   // x = signatureData["x"] - x;
    //y = signatureData["y"] - y;
    
    //small hack for positioning due to image white spaces...todo later..
    x_off = x_off + 40;
    y_off = y_off + 50;
    //console.log("getBoundingClientRect x:" + x + "  y: " + y + " right:" + rgt + "  bottom: " + btm)
    //console.log("offset x:" + this.pdfcanvas.nativeElement.offsetLeft + "  y: " + this.pdfcanvas.nativeElement.offsetTop + " windowscrollx:" + window.scrollX + "  windowscrollY: " + window.scrollY)
    

    const imgSignEl = this.imageSignature;
    const canvasContElHeight = this.canvasContainerRef.nativeElement.scrollTop;
    console.log("canvasContElHeight: " + canvasContElHeight)
    this.imageSignature.onload = function(){   // put this above img.src 
      context.drawImage(imgSignEl, signatureData["x"] - x_off, signatureData["y"] - y_off + canvasContElHeight,100,100);
      console.log("image widht: " + imgSignEl.width + " image height: " +imgSignEl.height);
  };
    this.imageSignature.src = signatureData["imageDataUrl"];
    //crop white spaces
    //this.imageSignature.src = this.cropImageWhiteSpaces();
  }

  async savePdf() : Promise<void> {
    let pdfPages = this.pdfDoc.numPages;
    const doc = new jsPDF('p', 'mm');

    await this.processDownload(pdfPages,doc).then((doc) => {
      doc.save('pdfDocument.pdf');
    });
  }

  async processDownload(pdfPages,doc) : Promise<jsPDF> {
    for(let i = 1; i<=pdfPages; i++) {
      if(i>1) {
        doc.addPage();
      }
      let canvEl = this.renderer.selectRootElement("#canvas_" + i);
      let divHeight = canvEl.clientHeight;
      let divWidth = canvEl.clientWidth;
      let options = { background: 'white', width: divWidth, height: divHeight };

      await domtoimage.toPng(canvEl, options).then((imgData) => {
        return imgData;
      }).then((imgData) => {
        //console.log("imagedata..." + imgData.substring(1, 40))
        let imgProps = doc.getImageProperties(imgData);
        let pdfWidth = doc.internal.pageSize.getWidth();
        let pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      });
    }
     return doc;
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

  onFileSelected(event) {

    const file:File = event.target.files[0];

    if (file) {
        this.fileName = file.name;
        this.getBase64(file);
    }
}

  getBase64(file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload =  () => {
      //console.log(reader.result);
      this.pdfSrc = reader.result.toString();
      this.loadPdfjs();
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
}

}