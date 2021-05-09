import { Component, OnInit, ViewChild } from "@angular/core";
import { SignaturePad } from "angular2-signaturepad";

@Component({
  selector: "signature",
  templateUrl: "./signature.component.html",
  styleUrls: ["./signature.component.css"]
})
export class SignatureComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  imagePath: any;
  showSignPad: boolean = true;
  showSignImage: boolean = false;
  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  imgSignatureData: Object = {imageDataUrl: ""}

  private signaturePadOptions: Object = {
    // passed through to szimek/signature_pad constructor
    minWidth: 5,
    canvasWidth: 400,
    canvasHeight: 300
  };

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set("minWidth", 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
    this.imagePath = this.signaturePad.toDataURL();
    this.showSignPad = false;
    this.showSignImage = true;
    this.imgSignatureData["imageDataUrl"] = this.signaturePad.toDataURL();
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log("begin drawing");
  }
  onSaveHandler(data) {
    console.log(data);
  }

  onClearHandler() {
    console.log("On Clear click");
  }
  retrySignature() {
    this.showSignPad = true;
    this.showSignImage = false;
  }

  
}
