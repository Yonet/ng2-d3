import { Component, OnInit, ElementRef, Inject, OnChanges } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import * as d3 from 'd3';

@Component({
  moduleId: module.id,
  selector: 'app-scatter-plot',
  templateUrl: 'scatter-plot-cmp.component.html',
  styleUrls: ['scatter-plot-cmp.component.css'],
  inputs: ['options', 'data']
})
export class ScatterPlotComponent implements OnInit {
  private beards = [];
  options: any;
  data: any;
  el: any;

  constructor(@Inject(ElementRef) elementRef: ElementRef) {
    this.el = elementRef.nativeElement;
  };

  ngOnChanges(){
  //  this.updateWithOptions(this.options);
  }

  ngOnInit() {
    let beards = new Observable(observer=>{
      let len = 0;
      let interval = setInterval(()=>{
        let todayIsTheDay = Math.floor(Math.random() * 50);
        if(todayIsTheDay < len) {
          len = len - todayIsTheDay;
        }
        observer.next(len++);
      }, 1000);

      () => {
        console.log('done');
        clearInterval(interval);
      }
    });

    let endIt = beards.subscribe(value => console.log(value));
    setTimeout(()=>{
      endIt.unsubscribe();
    }, 50000);
  }



}
