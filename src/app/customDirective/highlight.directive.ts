import { Directive,HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor() { }
@HostBinding('style.background-color') background:string = 'rgb(233, 249, 249)'
@HostBinding('style.border') border:string = 'none'

@HostListener('mouseenter') mouseenter(){
    this.background='yellow';
    this.border='orange 2px solid'
}

@HostListener('mouseleave') mouseleave(){
    this.background='rgb(233, 249, 249)';
    this.border='none'
}
}
