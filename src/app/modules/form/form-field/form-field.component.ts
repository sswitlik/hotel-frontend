import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

export enum FormComponentType {
  INPUT,
  RANGE_CALENDAR,
  CALENDAR,
  DROPDOWN,
}

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styles: [],
})
export class FormFieldComponent implements OnInit {
  FormComponentType = FormComponentType;

  constructor(private container: ControlContainer) {
  }

  ngOnInit() {
    this.group = this.container.control as FormGroup;
  }

  @Input()
  name: string;

  @Input()
  label: string;

  @Input()
  component: FormComponentType = FormComponentType.INPUT;

  @Input()
  config: any = {};

  group: FormGroup;
}
