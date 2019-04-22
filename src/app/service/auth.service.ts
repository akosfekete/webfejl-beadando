import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../interface/user";
import {SessionService} from "./session.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //http: unnecessary for now (no backend)
  constructor(//private _http: Http,
              private _sessionService: SessionService,
              private _router: Router ) {
    this.loggedIn.next(this._sessionService.isSetUserSession())
  }

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login(user: User) {
    //no backend -> no check
    this._sessionService.setUserSession(user);
    this.loggedIn.next(this._sessionService.isSetUserSession());
  }

  logout() {
    this._sessionService.clearUserSession();
    this.loggedIn.next(this._sessionService.isSetUserSession());
    return this._router.navigate(['/']);
  }

  getUserName(): string {
    return this._sessionService.getUser().username;
  }
}
