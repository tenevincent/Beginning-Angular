import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[pa-attr]'
})
export class AttrDirective {
  
  constructor(element: ElementRef) {
   element.nativeElement.classList.add("bg-success", "text-white");
  }
}