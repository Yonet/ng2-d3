import { Component } from '@angular/core';

@Component({
  selector: 'a-root',
  template: `
    <p>
      app Works!
    </p>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a';
}
