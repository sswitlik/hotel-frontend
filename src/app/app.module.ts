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

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    MenubarModule,
    ButtonModule,

    RegisterPageModule,
    LoginPageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
