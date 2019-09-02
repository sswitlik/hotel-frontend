import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer } from '@angular/forms';

export enum FormComponentType {
  INPUT,
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
    this.group = this.container.control;
  }

  @Input()
  name: string;

  @Input()
  label: string;

  @Input()
  component: FormComponentType = FormComponentType.INPUT;

  group: AbstractControl;
}
