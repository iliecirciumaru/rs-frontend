import { Injectable, OnInit } from '@angular/core';
import { RegisterRequest } from '../classes/register-request';
import { HttpClient } from '@angular/common/http';
import { API_HOST } from '../constants';
import { LoginRequest } from '../classes/login-request';
import { User } from '../classes/user';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

@Injectable()
export class UserService implements CanActivate {
  private curUserKey = 'current_user';
  user: User;

  constructor(private http: HttpClient, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log("Check that user is active");

    if (this.isUserSignedIn()) {
      return true;
    }

    this.toLoginPage();
    return false;
  }

  registerUser(request: RegisterRequest): Promise<any> {
    return this.http.post(API_HOST + '/user', request).toPromise();
  }

  loginUser(request: LoginRequest): Promise<any> {
    return this.http.post(API_HOST + '/login', request).toPromise().then(data => {
      this.user = data as User;
      this.putInCache(this.user);
      return this.user;
    });
  }

  isUserSignedIn(): boolean {
    if (this.user != null) {
      return true;
    }

    try {
      this.user = JSON.parse(window.localStorage.getItem(this.curUserKey));
    } catch (error) { }

    if (this.user != null) {
      return true;
    }

    return false;
  }

  logOut(): void {
    window.localStorage.removeItem(this.curUserKey);
    this.user = null;
    this.toLoginPage();
  }

  toLoginPage() {
    this.router.navigateByUrl('/login');
  }

  updateCache(user: User) {
    this.user = user;
    this.putInCache(user);
  }

  private putInCache(user: User) {
    window.localStorage.setItem(this.curUserKey, JSON.stringify(user));
  }


}