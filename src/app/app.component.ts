import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map} from "rxjs/operators";
import {AuthService} from "./service/auth.service";
import {StyleService} from "./service/style.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, DoCheck {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  title = 'webfejl';
  isLoggedIn$: Observable<boolean>;
  backgroundClass: string;
  menuFontClass: string;
  headerFontClass: string;
  titleFontClass: string;

  constructor(private breakpointObserver: BreakpointObserver,
              private authService: AuthService,
              private styleService: StyleService) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.backgroundClass = this.styleService.getRandomPatternClass();
    this.menuFontClass = this.styleService.getRandomFontClass();
    this.headerFontClass = this.styleService.getRandomFontClass();
    this.titleFontClass = this.styleService.getRandomFontClass();
  }

  ngDoCheck(): void {
    this.backgroundClass = this.styleService.getRandomPatternClass();
    this.headerFontClass = this.styleService.getRandomFontClass();
    this.menuFontClass = this.styleService.getRandomFontClass();
  }

}
