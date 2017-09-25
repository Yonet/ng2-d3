import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as d3 from "d3";

@Injectable()
export class DataService {


  private timer = Observable.timer(1000);
  constructor() {

  }

  getData() {
    return this.timer.mergeMap(() => Observable.from(randomData(20)))

  }

};

function randomData(samples) {
  var data = [],
    random = d3.randomNormal();

  for (let i = 0; i < samples; i++) {
    data.push({
      x: random(),
      y: random()
    });
  }
  return data;
}
