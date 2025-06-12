import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-display-products',
  imports: [CommonModule,FormsModule],
  templateUrl: './display-products.component.html',
  styleUrl: './display-products.component.css'
})
export class DisplayProductsComponent implements OnInit{
  constructor(public cart: CartService) {}
 @Input() itemData!: {
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
  this.text=this.itemData.description.slice(0,40)+"...."
}
al(){
  alert('Clicked')
}
}
