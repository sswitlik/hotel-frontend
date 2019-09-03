import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './routing/main/main.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { RegisterPageModule } from './routing/main/register-page/register-page.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageModule } from './routing/main/login-page/login-page.module';
import { HomePageModule } from './routing/main/home-page/home-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchVacationsPageModule } from './routing/main/home-page/search-vacations-page/search-vacations-page.module';
import { BuyHotelPageModule } from './routing/main/buy-hotel-page/buy-hotel-page.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
