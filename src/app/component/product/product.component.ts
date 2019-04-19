import {Component, OnInit} from '@angular/core';
import {Product} from "../../entity/product";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.products = this.productService.findAll();
  }

}
