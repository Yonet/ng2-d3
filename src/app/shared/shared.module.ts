import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarChartDirective } from './bar-chart.directive';
import { DonutChartDirective } from './donut-chart.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [BarChartDirective, DonutChartDirective],
  declarations: [BarChartDirective, DonutChartDirective]
})
export class SharedModule { }
