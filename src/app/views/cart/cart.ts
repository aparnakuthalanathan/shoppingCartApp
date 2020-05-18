import { Component,OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { Product } from '../../entities/product.entity';

import { SharingService } from '../../services/sharing.service';


@Component({
  selector: 'cart',
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})

export class CartComponent implements OnInit {
  totalQty: number;
  totalAmount: number;
  isCollapsed:boolean;
  productItems : Product[];
  
  constructor(
  public sharingService : SharingService,
    private router: Router
    ){}

ngOnInit() { 
this.isCollapsed = false;
this.totalQty = 0;
this.totalAmount = 0;

     console.log("Initializing cart");

this.sharingService.productRef.subscribe((productList) => {
     console.log("Subcribed");
  this.productItems = productList;
  if(this.productItems != undefined){
  this.totalQty = this.productItems.reduce(function (r, a) {
      return r + a['selectedQty'];
 }, 0);
this.totalAmount = this.productItems.reduce(function (r, a) {
      return r + a['amount'];
 }, 0);
 }
});

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
changeTotalQty(){
this.totalQty = this.productItems.reduce(function (r, a) {
      return r + a['selectedQty'];
 }, 0);
this.totalAmount = this.productItems.reduce(function (r, a) {
      return r + a['amount'];
 }, 0);
this.sharingService.updateProducts(this.productItems);
}



}