import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field/form-field.component';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldComponent } from './field/field.component';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';

@NgModule({
  declarations: [FormFieldComponent, FieldComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ReactiveFormsModule,
    CalendarModule,
    DropdownModule,
    InputMaskModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormFieldComponent,
    FieldComponent,
  ],
})
export class FormModule {
}
