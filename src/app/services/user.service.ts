import { Injectable, OnInit } from '@angular/core';
import { RegisterRequest } from '../classes/register-request';
import { HttpClient } from '@angular/common/http';
import {API_HOST} from '../constants';
import { LoginRequest } from '../classes/login-request';

@Injectable()
export class UserService {
  loggedIn: boolean = false;
  token: string = '';

  constructor(private http: HttpClient) {}

  setToken(token: string) {
    this.token = token;
    this.loggedIn = true;
  }

  logOut() {
    this.token = '';
    this.loggedIn = false;
  }

  registerUser(request: RegisterRequest) :Promise<any> {
    return this.http.post(API_HOST + '/user', request).toPromise();
  }

  loginUser(request: LoginRequest) :Promise<any> {
    return this.http.post(API_HOST + '/login', request).toPromise();
  }
}