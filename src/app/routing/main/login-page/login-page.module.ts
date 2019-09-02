import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { FormModule } from '../../../modules/form/form.module';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    FormModule,
    ButtonModule,
  ],
})
export class LoginPageModule { }
