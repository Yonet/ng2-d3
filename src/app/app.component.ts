import { Component } from '@angular/core';

@Component({
  selector: 'a-root',
  template: `
    <p>
      app Works!
      <svg [aBarChart]="'Hello!'"></svg>
    </p>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a';
}
