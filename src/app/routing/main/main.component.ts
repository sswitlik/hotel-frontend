import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [],
})
export class MainComponent implements OnInit {

  items = [
    {
      label: 'sth',
    },
  ];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  register() {
    this.router.navigate(['register']);
  }
}
