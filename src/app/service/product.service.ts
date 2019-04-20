import { Injectable } from '@angular/core';

import {Product} from "../entity/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[];

  constructor() {
    this.products = [
      {id: 'p01', name: 'name1', price: 100, photo: '1638254.jpg', description: 'Product one',
        details: 'Some very long text for Product one.'},
      {id: 'p02', name: 'name2', price: 200, photo: '1816031.jpg', description: 'Product two',
        details: 'Some very long text for Product two.'},
      {id: 'p03', name: 'name3', price: 300, photo: '2917409.jpg', description: 'Product three',
        details: 'Some very long text for Product three.'}
    ];
  }

  findAll(): Product[] {
    return this.products;
  }

  find(id: String) {
    return this.products[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: String) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return i;
      }
    }
    return -1;
  }
}
