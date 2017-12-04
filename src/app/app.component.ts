import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>Hello world</div>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'app';
}
