import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';

import { Product } from '../entities/product.entity';

@Injectable({
    providedIn: 'root'
})
export class SharingService{
     products : any = [];
    productRef = new BehaviorSubject<any>([]);

    constructor(){
   
    this.productRef.next(this.products);

    }

   updateProducts(data){
      this.productRef.next(data);
   }

   getCartProduct(){
     return this.products.asObservable;
   }
}