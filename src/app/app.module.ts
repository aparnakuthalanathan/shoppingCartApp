import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './views/home/home';
import { ProductComponent } from './views/products/products';
import { ShippingAddressComponent } from './views/shipping-address/shippingAddress';
import { CartComponent } from './views/cart/cart';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';
import { SharingService } from './services/sharing.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ShippingAddressComponent,
    CartComponent  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
 	AngularFirestoreModule
  ],
  providers: [FirebaseService,SharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
