import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-display-cart',
  imports: [CommonModule,FormsModule],
  templateUrl: './display-cart.component.html',
  styleUrl: './display-cart.component.css'
})
export class DisplayCartComponent {
    constructor(public cart: CartService) {}
    clkfn(){
      this.cart.deleteItem(this.cartItem.id)
    }
 @Input() cartItem!: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    brand: string;
    availabilityStatus: string;
    stock: number;
    images: string[];
};
text:string=""
extend:boolean=false;
ngOnInit(): void {
  this.text=this.cartItem.description.slice(0,60)+"...."
}


}
