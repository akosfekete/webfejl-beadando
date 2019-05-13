import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from "./component/cart/cart.component";
import { ProductComponent } from "./component/product/product.component";
import {ProductDetailsComponent} from "./component/product-details/product-details.component";
import {SignupComponent} from "./component/signup/signup.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {PayComponent} from './component/pay/pay.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'products', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'details', component: ProductDetailsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'pay', component: PayComponent},
  { path: '*', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
