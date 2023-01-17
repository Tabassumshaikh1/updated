import { Component } from '@angular/core';

@Component({
  selector: 'ngx-components',
  template: `
  <ngx-list></ngx-list>
    <router-outlet></router-outlet>
  `,
})
export class LayoutComponent {
}
