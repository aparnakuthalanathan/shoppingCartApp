import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router, Params } from '@angular/router';

@Component({
  selector: 'shippingAddress',
  templateUrl: './shippingAddress.html',
  styleUrls: ['./shippingAddress.css']
})

export class ShippingAddressComponent{
	  shippingAddress: FormGroup;
    successMsg: String;
    showWrapper:boolean;
	  constructor(){
	   this.shippingAddress = new FormGroup({
            address: new FormControl('',[Validators.required, Validators.maxLength(100)]),
            name: new FormControl('',[Validators.required, Validators.maxLength(100)]),
            emailAddress: new FormControl('',[Validators.required, Validators.maxLength(100)]),
            city: new FormControl('',[Validators.required]),
            state: new FormControl('',[Validators.required]),
            postcode: new FormControl('',[Validators.required]),
            phoneNumber: new FormControl('',[Validators.required])


       });
       this.showWrapper = true;
	  }
	   get name(){
 return this.shippingAddress.get('name');
 }
  get address(){
 return this.shippingAddress.get('address');
 }
  get emailAddress(){
 return this.shippingAddress.get('emailAddress');
 }
placeOrder(){
    this.showWrapper = false;
	this.successMsg = "Thank you! We have received your order.";
}
}