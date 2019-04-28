import {Component, OnInit} from '@angular/core';
import {Product} from "../../entity/product";
import {ProductService} from "../../service/product.service";
import {StyleService} from "../../service/style.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  products: Product[];
  cardClasses: string[] = ['card1', 'card2', 'card3', 'card4', 'card5'];
  bgClasses: string[] = ['bg1', 'bg2', 'bg3', 'bg4'];
  cardClass: string;
  bgClass: string;
  addButtonClass: string;
  detailsButtonClass: string;

  constructor(private productService: ProductService,
              private styleService: StyleService) {

  }

  ngOnInit() {
    this.products = this.productService.findAll();
  }

}
