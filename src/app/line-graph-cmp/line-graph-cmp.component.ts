// import { Component, OnInit, OnDestroy, OnChanges, ElementRef, Inject } from '@angular/core';
// import {Observable} from 'rxjs/Rx';
// import * as d3 from 'd3';
//
// @Component({
//   moduleId: module.id,
//   selector: 'line-graph',
//   templateUrl: 'line-graph-cmp.component.html',
//   styleUrls: ['line-graph-cmp.component.css']
// })
// export class LineGraphComponent implements OnInit, OnDestroy, OnChanges {
//
//   beard: Observable<any>;
//
//   constructor() { }
//
//   // before ngOnInit and when a data-bound input property value changes.
//   ngOnChanges() {
//
//   }
//
//   ngOnInit() {
//     this.beard = new Observable(observer => {
//       let len = 0;
//       let interval = setInterval(() => {
//         let todayIsTheDay = Math.floor(Math.random() * 50);
//         if (todayIsTheDay < len) {
//           len = len - todayIsTheDay;
//         }
//         observer.next(len++);
//       }, 1000);
//
//       () => {
//         console.log('done');
//         clearInterval(interval);
//       }
//     });
//
//     let endIt = this.beard.subscribe(value => console.log(value));
//     setTimeout(() => {
//       endIt.unsubscribe();
//     }, 50000);
//   }
//
//   ngOnDestroy() {
//
//   }
//
// }
