import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from "./component/cart/cart.component";
import { ProductComponent } from "./component/product/product.component";

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'products', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: '*', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
