import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './routing/main/main.component';
import { RegisterPageComponent } from './routing/main/register-page/register-page.component';
import { LoginPageComponent } from './routing/main/login-page/login-page.component';
import { HomePageComponent } from './routing/main/home-page/home-page.component';
import { SearchVacationsPageComponent } from './routing/main/home-page/search-vacations-page/search-vacations-page.component';
import { BuyHotelPageComponent } from './routing/main/buy-hotel-page/buy-hotel-page.component';
import { MyProfilePageComponent } from './routing/main/my-profile-page/my-profile-page.component';
import { PersonalDataPageComponent } from './routing/main/my-profile-page/personal-data-page/personal-data-page.component';
import { TravelsPageComponent } from './routing/main/my-profile-page/travels-page/travels-page.component';
import { PaymentsPageComponent } from './routing/main/my-profile-page/payments-page/payments-page.component';

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
        path: 'my-profile',
        component: MyProfilePageComponent,
        children: [
          {
            path: 'personal-data',
            component: PersonalDataPageComponent,
          },
          {
            path: 'travels',
            component: TravelsPageComponent,
          },
          {
            path: 'payments',
            component: PaymentsPageComponent,
          },
          {
            path: '',
            redirectTo: 'personal-data',
            pathMatch: 'full',
          },
        ],
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
