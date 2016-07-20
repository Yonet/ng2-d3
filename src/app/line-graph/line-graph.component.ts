import { Component, OnInit, OnDestroy, OnChanges, ElementRef, Inject } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import * as d3 from 'd3';

@Component({
  moduleId: module.id,
  selector: 'line-graph',
  templateUrl: 'line-graph.component.html',
  styleUrls: ['line-graph.component.css']
})
export class LineGraphComponent implements OnInit {

  private beard: Observable<any>;
  private el: any;
  private host: any;

  constructor(private element: ElementRef) {
    this.el = this.element.nativeElement;
    this.host = d3.select(this.el);
    // console.log('this.el', this.el);
    // console.log('this.host', this.host);
  }

  // before ngOnInit and when a data-bound input property value changes.
  ngOnChanges() {

  }

  ngOnInit() {
    this.beard = new Observable(observer => {
      let len = 0;
      let interval = setInterval(() => {
        let todayIsTheDay = Math.floor(Math.random() * 50);
        if (todayIsTheDay < len) {
          len = len - todayIsTheDay;
        }
        observer.next(len++);
      }, 1000);

      () => {
        console.log('done');
        clearInterval(interval);
      }
    });

    let endIt = this.beard.subscribe(value => console.log(value));
    setTimeout(() => {
      endIt.unsubscribe();
    }, 50000);
  }

  initGraph() {

  }

  updateGraph(){

  }

  ngOnDestroy() {

  }

}
