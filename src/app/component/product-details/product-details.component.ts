import { Component, OnInit } from '@angular/core';
import {Product} from "../../entity/product";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.product = this.productService.find(id);
      }
    });
  }

}
