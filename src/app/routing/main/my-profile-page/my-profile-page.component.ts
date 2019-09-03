import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-my-profile-page',
  templateUrl: './my-profile-page.component.html',
  styles: [],
})
export class MyProfilePageComponent implements OnInit {

  items: MenuItem[] = [
    {
      label: 'Dane osobowe',
      routerLink: 'personal-data',
    },
    {
      label: 'Moje wycieczki',
      routerLink: 'travels',
    },
    {
      label: 'Moje płatności',
      routerLink: 'payments',
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
