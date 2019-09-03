import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchVacationsPageComponent } from './search-vacations-page.component';
import { HotelSelectItemComponent } from './hotel-select-item/hotel-select-item.component';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { HotelViewItemComponent } from './hotel-view-item/hotel-view-item.component';

@NgModule({
  declarations: [SearchVacationsPageComponent, HotelSelectItemComponent, HotelViewItemComponent],
  imports: [
    CommonModule,
    DataViewModule,
    ButtonModule,
  ],
  exports: [
    HotelSelectItemComponent,
    HotelViewItemComponent,
  ],
})
export class SearchVacationsPageModule {
}
