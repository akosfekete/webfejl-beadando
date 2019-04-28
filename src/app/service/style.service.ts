 import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  constructor() { }
  private fontsClasses: string[] = ['font1', 'font2', 'font3', 'font4', 'font5', 'font6', 'font7', 'font8', 'font9',
    'font10', 'font11', 'font12', 'font13', 'font14', 'font15', 'font16', 'font17'];

  private cardClasses: string[] = ['card1', 'card2', 'card3', 'card4', 'card5'];

  private colorClasses: string[] = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6', 'color7', 'color8', 'color9', 'color10'];

  private bgClasses: string[] = ['bg1', 'bg2', 'bg3', 'bg4'];

  getRandomFontClass(): string {
    let fontNum: number = Math.floor(Math.random() * 16);
    return this.fontsClasses[fontNum];
  }

  getRandomProductClass(): string {
    return this.cardClasses[this.getRandomNr(4)];
  }


  getRandomButtonClass(): string {
    return this.cardClasses[this.getRandomNr(4)];
  }

  getRandomColorClass(): string {
    return this.colorClasses[this.getRandomNr(9)];
  }

  private getRandomNr(max: number): number {
    return Math.floor(Math.random() * (max + 1));
  }

}
