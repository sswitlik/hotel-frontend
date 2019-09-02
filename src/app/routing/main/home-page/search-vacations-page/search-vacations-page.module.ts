import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchVacationsPageComponent } from './search-vacations-page.component';
import { HotelViewComponent } from './hotel-view/hotel-view.component';
import { DataViewModule } from 'primeng/dataview';

@NgModule({
  declarations: [SearchVacationsPageComponent, HotelViewComponent],
  imports: [
    CommonModule,
    DataViewModule,
  ],
})
export class SearchVacationsPageModule {
}
