import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from "../../entity/product";
import {ProductService} from "../../service/product.service";
import {StyleService} from "../../service/style.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit, DoCheck {

  products: Product[];
  productClasses: string[] = [];
  bgClass: string;
  addButtonClass: string;
  detailsButtonClass: string;

  constructor(private productService: ProductService,
              private styleService: StyleService) {

  }

  ngOnInit() {
    this.products = this.productService.findAll();
    this.bgClass = this.styleService.getRandomPatternClass();
    this.addButtonClass = this.styleService.getRandomButtonClass();
    this.detailsButtonClass = this.styleService.getRandomButtonClass();

    for (const product of this.products)  {
      this.productClasses[product.id] = this.styleService.getRandomProductClass();
    }
  }

  ngDoCheck(): void {
    this.addButtonClass = this.styleService.getRandomButtonClass();
    this.detailsButtonClass = this.styleService.getRandomButtonClass();
    this.bgClass = this.styleService.getRandomPatternClass();
  }

}
