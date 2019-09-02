import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { SearchVacationComponent } from './search-component/search-vacation/search-vacation.component';
import { FormModule } from '../../../modules/form/form.module';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomePageComponent, SearchComponentComponent, SearchVacationComponent],
  imports: [
    CommonModule,
    FormModule,
    DropdownModule,
    ButtonModule,
    RouterModule,
  ],
})
export class HomePageModule {
}
