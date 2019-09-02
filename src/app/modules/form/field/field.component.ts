import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styles: [],
})
export class FieldComponent implements OnInit {

  @Input()
  label: string;

  constructor() {
  }

  ngOnInit() {
  }

}
