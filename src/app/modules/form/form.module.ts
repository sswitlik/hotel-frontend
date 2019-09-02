import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field/form-field.component';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormFieldComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormFieldComponent,
  ],
})
export class FormModule {
}
