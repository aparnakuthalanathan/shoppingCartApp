import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShippingAddressComponent } from './views/shipping-address/shippingAddress';
import { HomeComponent } from './views/home/home';


const routes: Routes = [
{path:'' ,component: HomeComponent},
{path:'home' , component: HomeComponent},
{path:'shipping-address/shippingAddress' , component: ShippingAddressComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
