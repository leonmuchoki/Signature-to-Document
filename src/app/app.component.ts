import { Component, ViewChild } from "@angular/core";
import { SignaturePad } from "angular2-signaturepad";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  
  name = "Draw signture, drag to pdf document and click save to download";
  
}
