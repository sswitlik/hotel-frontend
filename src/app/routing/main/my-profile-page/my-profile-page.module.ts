import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfilePageComponent } from './my-profile-page.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { PersonalDataPageComponent } from './personal-data-page/personal-data-page.component';
import { PaymentsPageComponent } from './payments-page/payments-page.component';
import { TravelsPageComponent } from './travels-page/travels-page.component';

@NgModule({
  declarations: [MyProfilePageComponent, PersonalDataPageComponent, PaymentsPageComponent, TravelsPageComponent],
  imports: [
    CommonModule,
    TabMenuModule,
  ],
})
export class MyProfilePageModule {
}
