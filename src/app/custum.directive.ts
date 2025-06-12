import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustum]'
})
export class CustumDirective {

  constructor() { }
  @HostBinding('class.add') add=false;
  @HostListener('mouseenter') onMouseEnter(){
    this.add=true
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.add=false
  }
}
