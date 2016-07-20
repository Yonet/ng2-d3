import { Component } from '@angular/core';
import {ScatterPlotComponent} from './scatter-plot-cmp';
import {LineGraphComponent} from './line-graph';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ScatterPlotComponent,LineGraphComponent]
})
export class AppComponent {
  title = 'app works!';
}
