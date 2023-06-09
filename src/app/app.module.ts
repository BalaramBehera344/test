import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyconComponent } from './components/currency-converter/currency-converter.component';
import { MutualFundService } from './services/mutual-fund.service';





@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    SearchBoxComponent,
    CurrencyconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [MutualFundService],
  bootstrap: [AppComponent]

})
export class AppModule { }
