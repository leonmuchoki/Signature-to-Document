import { Directive , ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

import  interact from 'interactjs';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective implements OnInit{
  @Input()
  model: any;

  @Input()
  options: any;

  @Output() 
  draggableClick = new EventEmitter();

  private currentlyDragged = false;

  constructor(private element: ElementRef) { }

  @HostListener('click', ['$event'])
  public onClick(event: any): void {
    if (!this.currentlyDragged) {
      this.draggableClick.emit();
    }
  }

  ngOnInit(): void {
    interact(this.element.nativeElement)
    .draggable(Object.assign({}, this.options || {}))
      .on('dragmove', (event) => {
        const target = event.target;
        const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
        const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);

        target.classList.add('getting-dragged');
        this.currentlyDragged = true;
        (window as any).dragData = this.model;
      })
      .on('dragend', (event) => {
       // event.target.style.transform = 'none';
       // event.target.removeAttribute('data-x');
       // event.target.removeAttribute('data-y');
       this.element.nativeElement.style.display='none';

        event.target.classList.remove('getting-dragged');
        setTimeout(() => {
          (window as any).dragData = null;
          this.currentlyDragged = false;
        });
      });
  }

  dragMoveListener (event) : void {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)

  //console.log("nimedragiwa....x:" + x+ " y:" + y);
  var rect = target.getBoundingClientRect();
  //console.log(rect.top, rect.right, rect.bottom, rect.left);

  //cons pos = this.getMousePos(); 
}



//window.dragMoveListener = this.dragMoveListener
}