import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { SharingService } from './services/sharing.service';
import { Product } from './entities/product.entity';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
  productItems : Product[];
  user: string;

constructor(  public firebaseService: FirebaseService,
  public sharingService : SharingService
){}
  
  ngOnInit(){
  console.log("Intializing App")
   this.firebaseService.getProducts().subscribe(data => {
      this.productItems = data.map(e => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()['name'],
          category:  e.payload.doc.data()['category'],
          image:  e.payload.doc.data()['image'],
          price:  e.payload.doc.data()['price'],
          selectedQty: 0,
          amount: 0
        } as Product;
      })
           console.log("App ::"+this.productItems);
     this.sharingService.updateProducts(this.productItems);

    });

  }
}