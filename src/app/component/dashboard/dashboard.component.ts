import {Component, DoCheck, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {StyleService} from '../../service/style.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit, DoCheck {

  imageStyle: string;
  cardStyle: string;

  constructor(public authService: AuthService,
              private styleService: StyleService) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

  ngDoCheck(): void {
    this.imageStyle = this.styleService.getRandomImageClass();
    this.cardStyle = this.styleService.getRandomColorClass();
  }
}
