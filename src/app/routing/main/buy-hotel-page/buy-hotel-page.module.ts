import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyHotelPageComponent } from './buy-hotel-page.component';
import { FormModule } from '../../../modules/form/form.module';
import { ButtonModule } from 'primeng/button';
import { SearchVacationsPageModule } from '../home-page/search-vacations-page/search-vacations-page.module';

@NgModule({
  declarations: [BuyHotelPageComponent],
  imports: [
    CommonModule,
    FormModule,
    ButtonModule,

    SearchVacationsPageModule,
  ],
})
export class BuyHotelPageModule {
}
