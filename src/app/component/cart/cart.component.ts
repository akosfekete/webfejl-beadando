import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Item} from "../../entity/item";
import {ProductService} from "../../service/product.service";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  private items: Item[];
  private total: number = 0;
  private panelClasses: string[] = ['panel1', 'panel2', 'panel3', 'panel4', 'panel5'];
  panelClass: string;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {

  }

  ngOnInit() {

    this.updateClasses();

    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        let item: Item = {
          product: this.productService.find(id),
          quantity: 1
        };

        if (localStorage.getItem('cart') == null) {
          let cart: any = [];
          cart.push(item);
          //what the fuck???
          //cart.push(JSON.stringify(item));
          localStorage.setItem('cart', JSON.stringify(cart));
        } else {
          let cart: any = JSON.parse(localStorage.getItem('cart'));
          let index: number = -1;
          for (let i = 0; i < cart.length; i++) {
            //FUUUUUUUUUUUUUUCK
            //let item: Item = JSON.parse(cart[i]);
            let item: Item = cart[i];
            if (item.product.id == id) {
              index = i;
              break;
            }
          }
          if (index == -1) {
            //cart.push(JSON.stringify(item));
            cart.push(item);
            localStorage.setItem('cart', JSON.stringify(cart));
          } else {
            //let item: Item = JSON.parse(cart[index]);
            let item: Item = cart[index];
            item.quantity += 1;
            //cart[index] = JSON.stringify(item);
            cart[index] = item;
            localStorage.setItem('cart', JSON.stringify(cart));
          }
        }
        this.loadCart();
      } else {
        this.loadCart();
      }
    })
  }

  private updateClasses(): void {
    let panelNumber: number = Math.floor(Math.random() * 5);
    this.panelClass = this.panelClasses[panelNumber];
  }

  private changeQuantity(id: string, quantity): void {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].product.id === id) {
        this.items[i].quantity = quantity;
        this.total += this.items[i].product.price;
        break;
      }
    }
    this.updateCart();
  }

  private updateCart(): void {
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    cart = this.items;
    let me = this;
    let test = JSON.stringify(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  private loadCart(): void {
    this.total = 0;
    this.items = [];
    let cart = JSON.parse(localStorage.getItem('cart'));

    if (cart === null) return;

    for (let i = 0; i < cart.length; i++) {
      //fucking retarted gaerbaegeeg who wrote this
      //let item = JSON.parse(cart[i]);
      let item: Item = cart[i];
      this.items.push({
        product: item.product,
        quantity: item.quantity
      });
      this.total += item.product.price * item.quantity;
    }
  }

  remove(id: String): void {
    let cart: any = JSON.parse(localStorage.getItem('cart'));
    let index: number = -1;
    for (let i = 0; i < cart.length; i++) {
      //fuck
      //let item: Item = JSON.parse(cart[i]);
      let item: Item = cart[i];
      if (item.product.id == id) {
        cart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    this.loadCart();
  }
}
