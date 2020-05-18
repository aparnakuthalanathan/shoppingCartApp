import { Component,OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { SharingService } from '../../services/sharing.service';

import { Product } from '../../entities/product.entity';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'products',
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})

export class ProductComponent implements OnInit {selectedCategory: string;
  totalQty: number;
    totalAmount: number;
  isCollapsed:boolean;
  productItems : Product[];
constructor(
  public firebaseService: FirebaseService, 
  public sharingService : SharingService,
    private router: Router
    ) {

 }

ngOnInit() { 
this.selectedCategory='ALL';
this.isCollapsed = false;
this.totalQty = 0;
  console.log("Intializing Product")

//this.firebaseService.getProducts().subscribe(data => {
  //    this.productItems = data.map(e => {
    //    return {
      //    id: e.payload.doc.id,
        //  name: e.payload.doc.data()['name'],
          //category:  e.payload.doc.data()['category'],
          //image:  e.payload.doc.data()['image'],
          //price:  e.payload.doc.data()['price'],
          //selectedQty: 0
        //} as Product;
      //})
      //console.log(this.productItems);
    //});

    this.sharingService.productRef.subscribe((productList) => {
     console.log("Subcribed in product");
  this.productItems = productList;
  
});
     console.log("Product ::"+this.productItems);
     this.sharingService.updateProducts(this.productItems);


}

add(item){
   item.selectedQty =  1;
   item.amount = item.selectedQty * item.price;
   this.changeTotalQty();

}
remove(item){
item.selectedQty = item.selectedQty - 1;
item.amount = item.selectedQty * item.price;
this.changeTotalQty();

}
plus(item){
  item.selectedQty = item.selectedQty + 1;
  item.amount = item.selectedQty * item.price;
  this.changeTotalQty();

}

filter(items,filterCategory){
    if(filterCategory == 'ALL'){
    return items;
    }
  var filteredItems=  items.filter(function(item){
  return item.category == filterCategory;
  })
  return filteredItems;
}
changeTotalQty(){

 this.sharingService.updateProducts(this.productItems);
}

}

