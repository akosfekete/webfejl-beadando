import {Injectable} from '@angular/core';
import {User} from "../interface/user";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  isSetUserSession(): boolean {
    return !!localStorage.getItem('user');
  }

  clearUserSession() {
    localStorage.removeItem('user');
  }

  setUserSession(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): User {
    let userString = localStorage.getItem('user');
    return JSON.parse(userString);
  }
  constructor() { }
}
