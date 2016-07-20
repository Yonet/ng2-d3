import { Component } from '@angular/core';
import {ScatterPlotCmpComponent} from './scatter-plot-cmp/scatter-plot-cmp.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ScatterPlotCmpComponent]
})
export class AppComponent {
  title = 'app works!';
}
