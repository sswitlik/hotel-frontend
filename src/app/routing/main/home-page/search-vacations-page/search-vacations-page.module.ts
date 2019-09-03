import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchVacationsPageComponent } from './search-vacations-page.component';
import { HotelSelectItemComponent } from './hotel-select-item/hotel-select-item.component';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [SearchVacationsPageComponent, HotelSelectItemComponent],
  imports: [
    CommonModule,
    DataViewModule,
    ButtonModule,
  ],
  exports: [
    HotelSelectItemComponent,
  ],
})
export class SearchVacationsPageModule {
}
