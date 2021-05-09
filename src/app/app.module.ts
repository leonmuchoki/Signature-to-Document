import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { SignaturePadModule } from "angular2-signaturepad";
import { PdfJsViewerModule } from "ng2-pdfjs-viewer";
//import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from "ngx-extended-pdf-viewer";


import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { SignatureComponent } from "./signature/signature.component";
import { PdfViewerComponent } from "./pdf-viewer/pdf-viewer.component";
import { DraggableDirective } from "./draggable.directive";
import { DroppableDirective } from "./droppable.directive";
import { SafePipe } from "./safe.pipe";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SignaturePadModule,
    PdfJsViewerModule,
    NgxExtendedPdfViewerModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [ MatButtonModule,MatIconModule ],
  declarations: [
    AppComponent,
    HelloComponent,
    SignatureComponent,
    PdfViewerComponent,
    DraggableDirective,
    DroppableDirective,
    SafePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
