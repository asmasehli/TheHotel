import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';

const routes: Routes = [
  {path : 'accomodation', component: AccomodationComponent},
  {path : 'celebrations', component: CelebrationsComponent},
  {path : 'food-and-beverage', component: FoodAndBeverageComponent},
  {path : 'lifestyle', component: LifestyleComponent},
  {path : 'weddings', component: WeddingsComponent},
  {path : 'offers', component: OffersComponent},
  {path : 'signin', component: SigninComponent},
  {path : 'signup', component: SignupComponent},
  {path : '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
