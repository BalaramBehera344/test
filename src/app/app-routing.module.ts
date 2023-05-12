import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CurrencyconComponent } from './components/currency-converter/currency-converter.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';




const routes: Routes = [
 {path:'',component:HomepageComponent},
 {path:'login',component:LoginComponent},
 {path:'register', component:RegisterComponent},
 { path:'currency-converter', component:CurrencyconComponent},
  {path:'search-box',component:SearchBoxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
