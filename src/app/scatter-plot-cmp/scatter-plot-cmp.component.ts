import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import * as d3 from 'd3';

@Component({
  moduleId: module.id,
  selector: 'app-scatter-plot-cmp',
  templateUrl: 'scatter-plot-cmp.component.html',
  styleUrls: ['scatter-plot-cmp.component.css']
})
export class ScatterPlotCmpComponent implements OnInit {
  private beards = [];

  constructor() { }

  ngOnInit() {
    console.log('d3', d3);
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
