import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';

const routes: Routes = [
  { path: '', component: BarComponent },
  { path: 'pie', component: PieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
