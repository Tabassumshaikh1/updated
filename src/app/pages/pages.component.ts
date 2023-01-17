import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { UserAuthService } from './ui-features/service/user-auth.service';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout >
     <nb-menu *ngIf="islogedin" [items]="menu" ></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {
islogedin!:boolean
isadmin!:boolean
  menu = MENU_ITEMS;
  constructor( private userServ:UserAuthService){}
  ngOnInit(){
  this.islogedin = this.userServ.isLoggedIn();
  console.log(this.islogedin)
  this.isadmin=this.userServ.isAdmin()
  
}
}
