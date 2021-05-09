import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

import interact from 'interactjs';

@Directive({
  selector: '[appDroppable]'
})
export class DroppableDirective implements OnInit {
  @Input()
  options: any;

  @Output()
  dropping: EventEmitter<any> = new EventEmitter();

  dropPositionData: Object = {x: 0, y: 0, imageDataUrl: ''}

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    // enable draggables to be dropped into this
    interact(this.elementRef.nativeElement)
    .dropzone(Object.assign({}, this.options || {}))
    .on('dropactivate', event => event.target.classList.add('can-drop'))
    .on('dragenter', event => {

      const draggableElement = event.relatedTarget;
      const dropzoneElement = event.target;

      dropzoneElement.classList.add('can-catch');
      draggableElement.classList.add('drop-me');

    })
    .on('dragleave', event => {
      event.target.classList.remove('can-catch', 'caught-it');
      event.relatedTarget.classList.remove('drop-me');
    })
    .on('drop', event => {
      const model = (window as any).dragData;

      console.log("model")
      console.log(event.dragEvent)
      console.log(event.dragEvent.client.x)
      if (typeof (model) === 'object') {
        //this.dropping.emit(model);
       // console.log("model")
      //console.log(model);
      
        let dropData = {};//this.calculateDropPosition(event);
        dropData["x"] = event.dragEvent.client.x;
        dropData["y"] = event.dragEvent.client.y;

        dropData["imageDataUrl"] = model["imageDataUrl"];
        
        this.dropping.emit(dropData);
        
        console.log(dropData);
      }

      event.target.classList.add('caught-it');
      

      if ((window as any).document.selection) {
        (window as any).document.selection.empty();
      } else {
        window.getSelection().removeAllRanges();
      }
    })
    .on('dropdeactivate', event => {
      event.target.classList.remove('can-drop');
      event.target.classList.remove('can-catch');
    });
/*     .dropzone({
      // only accept elements matching this CSS selector
      accept: '.drag-me',
      // Require a 75% element overlap for a drop to be possible
     // overlap: 0.75,

      // listen for drop related events:

      ondropactivate: function (event) {
        // add active dropzone feedback
        event.target.classList.add('drop-active')
      },
      ondragenter: function (event) {
        var draggableElement = event.relatedTarget
        var dropzoneElement = event.target

        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target')
        draggableElement.classList.add('can-drop')
        draggableElement.classList.remove('dropped-out')
        //draggableElement.textContent = 'Dragged in'
      },
      ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target')
        event.relatedTarget.classList.remove('can-drop')
        event.relatedTarget.classList.add('dropped-out')
        //event.relatedTarget.textContent = 'Dragged out'
      },
      ondrop: function (event) {
        //event.relatedTarget.textContent = 'Dropped'
        var target = event.target;
        var rect = target.getBoundingClientRect();
        //console.log("droppedd: " + rect.top, rect.right, rect.bottom, rect.left);

        var dropzonePostion = target.getBoundingClientRect(),
        elementPosition = event.relatedTarget.getBoundingClientRect(),
        x = elementPosition.left - dropzonePostion.left,
        y = elementPosition.top - dropzonePostion.top;
 
        //console.log("nimedroppiwa....x:" + x + " y:" + y);

        const model = (window as any).dragData;
        console.log("model")
        console.log(model)

        if (typeof (model) === 'object') {
          this.dropping.emit(model);
        }

        event.target.classList.add('caught-it');

        if ((window as any).document.selection) {
          (window as any).document.selection.empty();
        } else {
          window.getSelection().removeAllRanges();
        }
      },
      ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active')
        event.target.classList.remove('drop-target')
      }
    }) */
  }

  calculateDropPosition(event) : Object {
    let dropzonePostion = event.target.getBoundingClientRect(),
    elementPosition = event.relatedTarget.getBoundingClientRect(),
    x = elementPosition.left - dropzonePostion.left,
    y = elementPosition.top - dropzonePostion.top;

    //dropzonePostion.offset().top
    console.log(event.target.getBoundingClientRect())
    console.log("dropzoneposition:y= " + elementPosition.top + " x:" + elementPosition.left);
    this.dropPositionData["x"] =  dropzonePostion.left;
    this.dropPositionData["y"] =  dropzonePostion.top;
    return this.dropPositionData;
  }

}