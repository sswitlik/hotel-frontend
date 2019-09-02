import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './register-page.component';
import { FormModule } from '../../../modules/form/form.module';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [RegisterPageComponent],
  imports: [
    CommonModule,
    FormModule,
    ButtonModule,
  ],
})
export class RegisterPageModule {
}
