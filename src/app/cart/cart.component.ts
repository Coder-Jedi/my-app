import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(private cartService : CartService,
              private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() :void {
    //clear the cart
    this.items = this.cartService.clearCart();
    //process submitted values
    console.warn('Your order has been submitted', this.checkoutForm.value);
    //reset the form
    this.checkoutForm.reset();
  }

}
