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
        details: 'Some very long text for Product three.'},
      {id: 'p04', name: 'name4', price: 300, photo: '2002443.jpg', description: 'Product four',
        details: 'Some very long text for Product four.'},
      {id: 'p05', name: 'name5', price: 300, photo: '2072331.jpg', description: 'Product five',
        details: 'Some very long text for Product five.'},
      {id: 'p06', name: 'name6', price: 300, photo: '2405956.jpg', description: 'Product six',
        details: 'Some very long text for Product six.'}
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
