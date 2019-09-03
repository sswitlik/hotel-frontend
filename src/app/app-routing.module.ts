import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './routing/main/main.component';
import { RegisterPageComponent } from './routing/main/register-page/register-page.component';
import { LoginPageComponent } from './routing/main/login-page/login-page.component';
import { HomePageComponent } from './routing/main/home-page/home-page.component';
import { SearchVacationsPageComponent } from './routing/main/home-page/search-vacations-page/search-vacations-page.component';
import { BuyHotelPageComponent } from './routing/main/buy-hotel-page/buy-hotel-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'register',
        component: RegisterPageComponent,
      },
      {
        path: 'login',
        component: LoginPageComponent,
      },
      {
        path: 'buy-hotel',
        component: BuyHotelPageComponent,
      },
      {
        path: 'home',
        component: HomePageComponent,
        children: [
          {
            path: 'search-vacation',
            component: SearchVacationsPageComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
