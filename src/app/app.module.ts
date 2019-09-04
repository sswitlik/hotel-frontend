import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './routing/main/main.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { RegisterPageModule } from './routing/main/register-page/register-page.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginPageModule } from './routing/main/login-page/login-page.module';
import { HomePageModule } from './routing/main/home-page/home-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchVacationsPageModule } from './routing/main/home-page/search-vacations-page/search-vacations-page.module';
import { BuyHotelPageModule } from './routing/main/buy-hotel-page/buy-hotel-page.module';
import { MyProfilePageModule } from './routing/main/my-profile-page/my-profile-page.module';
import { registerLocaleData } from '@angular/common';
import localePL from '@angular/common/locales/pl';
import { TokenInterceptor } from './modules/authorization/token.interceptor';

registerLocaleData(localePL);

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    MenubarModule,
    ButtonModule,

    RegisterPageModule,
    LoginPageModule,
    HomePageModule,
    SearchVacationsPageModule,
    BuyHotelPageModule,
    MyProfilePageModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pl' },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
