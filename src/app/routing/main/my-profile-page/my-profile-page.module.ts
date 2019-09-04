import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfilePageComponent } from './my-profile-page.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { PersonalDataPageComponent } from './personal-data-page/personal-data-page.component';
import { PaymentsPageComponent } from './payments-page/payments-page.component';
import { TravelsPageComponent } from './travels-page/travels-page.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { PaymentFormComponent } from './travels-page/payment-form/payment-form.component';
import { FormModule } from '../../../modules/form/form.module';

@NgModule({
  declarations: [MyProfilePageComponent, PersonalDataPageComponent, PaymentsPageComponent, TravelsPageComponent, PaymentFormComponent],
  imports: [
    CommonModule,
    TabMenuModule,
    TableModule,
    ButtonModule,
    DialogModule,
    FormModule,
  ],
})
export class MyProfilePageModule {
}
