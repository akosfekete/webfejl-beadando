import {Component, DoCheck, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Item} from '../../entity/item';
import {StyleService} from '../../service/style.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.sass']
})
export class PayComponent implements OnInit, DoCheck {

  items: Item[];
  total = 0;
  itemStyles: string[] = [];
  formBackground: string;

  constructor(private authService: AuthService,
              private styleService: StyleService) { }

  ngOnInit() {
    this.loadCart();
  }

  ngDoCheck(): void {
    this.formBackground = this.styleService.getRandomColorClass();
  }

  private loadCart(): void {
    this.total = 0;
    this.items = [];
    const cart = JSON.parse(localStorage.getItem('cart'));

    if (cart === null) { return; }

    for (let i = 0; i < cart.length; i++) {
      const item: Item = cart[i];
      this.items.push({
        product: item.product,
        quantity: item.quantity
      });
      this.itemStyles[item.product.name] = this.styleService.getRandomListClass();
      this.total += item.product.price * item.quantity;
    }
  }

}
