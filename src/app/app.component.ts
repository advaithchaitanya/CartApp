import { Component, HostListener, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {products} from '../data'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DisplayProductsComponent } from './display-products/display-products.component';
import { CustumDirective } from './custum.directive';
import { DisplayCartComponent } from './display-cart/display-cart.component';
import { CartService } from './cart.service';
import { ProductsService } from './products.service';
import { ProductModule } from './product/product.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule,DisplayProductsComponent,CustumDirective,DisplayCartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  constructor(public cart: CartService,public productService:ProductsService) {}
  
      
  side=false
  title = 'CartApp';
  search=""
  selectedCategory:string="All";

  dataProducts!: {
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
products: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    brand: string;
    availabilityStatus: string;
    stock: number;
    images: string[];
}[] = [];

ngOnInit(): void {
  this.productService.getProducts().subscribe({
    next: (data) => {
      this.products = data;
      this.dataProducts = data;
      this.filterProducts();
      this.data = this.dataProducts;
      console.log(this.products);
      console.log(this.data);
    },
    error: (err: any) => {
      console.error('err', err);
    }
  });
  
}
  
}

