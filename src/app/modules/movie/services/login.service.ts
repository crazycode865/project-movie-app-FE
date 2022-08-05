import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  _url = 'http://localhost:8080/';

  isLoggedIn!: boolean;

  constructor(private _httpClient: HttpClient) {
    this.isLoggedIn = false;
  }
  loginUser(token: string) {
    localStorage.setItem('token', token);

    return true;
  }
  isUserLoggedIn() {
    let token = localStorage.getItem('token');
    if (token === undefined || token === '' || token === null) {
      this.isLoggedIn = false;
      return false;
    } else {
      this.isLoggedIn = true;
      return true;
    }
  }
  logout() {
    localStorage.removeItem('token');
    return (this.isLoggedIn = false);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  generateToken(user: User) {
    return this._httpClient.post(`${this._url}authenticate`, user, {
      responseType: 'text',
    });
  }
}
