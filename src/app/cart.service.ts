import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  
  cartList: {
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
temlist!:any;
deleteItem(idx:number){
  this.temlist=this.cartList.filter(i=>{
    return i.id!==idx
  })
  this.cartList=this.temlist

}
addToCart(item: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    brand: string;
    availabilityStatus: string;
    stock: number;
    images: string[];
}) {
  

  if (this.cartList.includes(item)){

    alert('Already in cart')
    
    return;
  }
  alert('Added to Cart')
  this.cartList.push(item)
  
}


}
