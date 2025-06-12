import { Component, HostListener, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {products} from '../data'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DisplayProductsComponent } from './display-products/display-products.component';
import { CustumDirective } from './custum.directive';
import { DisplayCartComponent } from './display-cart/display-cart.component';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule,DisplayProductsComponent,CustumDirective,DisplayCartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  constructor(public cart: CartService) {}
  
  
  side=false
  title = 'CartApp';
  search=""
  selectedCategory:string="All";
  cartItem!: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    brand: string;
    availabilityStatus: string;
    stock: number;
    images: string[];
}[];
  dataProducts: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    brand: string;
    availabilityStatus: string;
    stock: number;
    images: string[];
}[]=products; 
change(){
  this.selectedCategory="All"
  this.filterProducts()
}
filterWritten(){
  this.data=this.dataProducts.filter(i=>{
    return i.title.includes(this.search) || i.description.includes(this.search)
  })
}
ngOnChanges(){

}
data:{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    brand: string;
    availabilityStatus: string;
    stock: number;
    images: string[];
}[]=[];

filterProducts():void{
  if (this.selectedCategory==='All'){
    this.data=this.dataProducts
    return;
  }
  this.data=this.dataProducts.filter(i=>i.availabilityStatus===this.selectedCategory)
}
scrolled=false
@HostListener('window:scroll',[])
onWindowSroll(){
  this.scrolled=window.scrollY>0
}
ngOnInit(): void {
  this.filterProducts()
  this.data=products;
  console.log(this.data)
  this.cartItem=this.cart.cartList
}
  
}

