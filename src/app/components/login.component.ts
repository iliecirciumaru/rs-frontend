import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { LoginRequest } from '../classes/login-request';
import { Notification } from '../classes/notification';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.form.html',
})
export class LoginComponent {
  login: string;
  password: string;
  notif: Notification;

  constructor(private userService: UserService, private router: Router) {
    this.notif = new Notification();
  }

  doLogin() {
    const request = new LoginRequest(this.login, this.password);

    console.log("Send to register", request);
    this.notif.reset();
    this.userService.loginUser(request).then(data => {
      console.log("Success login", data);
      this.notif.success("Successful login");

      setTimeout(() => {
        this.router.navigateByUrl('');
      }, 1000)

    }, error => {
      console.log("Error login", error)
      this.notif.fail(error.error.message || "Error occured, try again");
    });
  }
}