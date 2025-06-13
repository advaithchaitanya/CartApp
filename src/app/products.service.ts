import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductModule } from './product/product.module';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductModule[]> {
    return this.http.get<{ products: ProductModule[] }>(this.apiUrl).pipe(
      map((response) => response.products)
    );
  }
}
