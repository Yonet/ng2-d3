import { Component, OnInit, ElementRef } from '@angular/core';
import * as d3 from "d3";

@Component({
  selector: 'a-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    d3.select(this.el.nativeElement)
      .selectAll('rect')
      .data([2, 5, 6])
      .enter().append('rect')
      .attr('x', d => d * 10)
      .attr('y', d => d * 2)
      .attr('fill', 'blue');
    // console.log(this.el);
  }

}
