import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductComponent} from './component/product/product.component';
import {ProductService} from "./service/product.service";
import {CartComponent} from './component/cart/cart.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "./material/material.module";
import {SidenavComponent} from './component/sidenav/sidenav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {ProductDetailsComponent} from './component/product-details/product-details.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SignupComponent} from './component/signup/signup.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {AuthGuard} from "./guard/auth.guard";
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PayComponent } from './component/pay/pay.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    SidenavComponent,
    ProductDetailsComponent,
    SignupComponent,
    DashboardComponent,
    PayComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    //RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProductService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
