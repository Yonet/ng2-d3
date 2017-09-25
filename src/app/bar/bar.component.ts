import { Component, OnInit, ElementRef, NgZone } from '@angular/core';
import * as d3 from "d3";
import { DataService } from '../data.service';

let margin = {
  top: 20,
  right: 20,
  bottom: 30,
  left: 50
};

let width = 800 - margin.left - margin.right;
let height = 400 - margin.top - margin.bottom;
let x = d3.scaleLinear()
  .range([0, width]);
let y = d3.scaleLinear()
  .range([height, 0]);

let xAxis = d3.axisBottom(x).ticks(12);
let yAxis = d3.axisLeft(y).ticks(12 * height / width);
let svg;
@Component({
  selector: 'a-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
  public barData;

  constructor(private service: DataService, private el: ElementRef, private zone: NgZone) { }

  ngOnInit() {
    this.setUp(this.el.nativeElement);

    this.barData = this.service.getData()
      .subscribe((d) => {
        this.zone.runOutsideAngular(() => {
          this.populate(d);
        })
      })
  }

  setUp(el) {
    svg = d3.select(el)
      .attr("id", "chart_svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // XAxis
    svg.append("g")
      .attr("class", "x axis ")
      .attr('id', "axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    // YAxis
    svg.append("g")
      .attr("class", "y axis")
      .attr('id', "axis--y")
      .call(yAxis);
  }

  populate(ds) {

    // SetUp domain
    x.domain(d3.extent(ds, function(d) {
      return d.x;
    })).nice();
    y.domain(d3.extent(ds, function(d) {
      return d.y;
    })).nice();

    //Transition
    var t = svg.transition().duration(750);
    svg.select("#axis--x").transition(t).call(xAxis);
    svg.select("#axis--y").transition(t).call(yAxis);
    svg.selectAll(".dot").data(ds)
    svg.selectAll("circle").transition(t)
      .attr("cx", function(d) {
        return x(d.x);
      })
      .attr("cy", function(d) {
        return y(d.y);
      });

    // Bind the data
    svg.selectAll(".dot")
      .data(ds)
      .enter().append("circle")
      .attr("class", "dot")
      .attr("r", function(d) {
        return x(d.x) / 30;
      })
      .attr("cx", function(d) {
        return x(d.x);
      })
      .attr("cy", function(d) {
        return y(d.y);
      })
      .attr("opacity", 0.5)
      .style("fill", "red");

  }

}
