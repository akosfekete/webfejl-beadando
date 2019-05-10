import {Component, DoCheck, OnInit} from '@angular/core';
import {Product} from "../../entity/product";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute} from "@angular/router";
import {StyleService} from '../../service/style.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit, DoCheck{

  product: Product;
  backgroundStyle: string;
  cardStyle: string;
  imageStyle: string;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private styleService: StyleService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.product = this.productService.find(id);
      }
    });
  }

  ngDoCheck(): void {
    this.backgroundStyle = this.styleService.getRandomPatternClass();
    this.cardStyle = this.styleService.getRandomProductClass();
    this.imageStyle = this.styleService.getRandomImageClass();
  }

}
