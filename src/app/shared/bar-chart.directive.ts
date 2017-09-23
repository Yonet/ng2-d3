import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[aBarChart]'
})
export class BarChartDirective {

  @Input('aBarChart') options: string;

  @HostListener('mouseenter') onMouseEnter() {
    console.log('mouseenter ', this.options);
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('mouseleave');
  }

  constructor(private el: ElementRef) { console.log("bar") }

}
