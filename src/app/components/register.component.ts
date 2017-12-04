import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { RegisterRequest } from '../classes/register-request';
import { LoginRequest } from '../classes/login-request';
import { Notification } from '../classes/notification';

@Component({
  selector: 'register',
  templateUrl: './register.form.html',
})
export class RegisterComponent {
  login: string;
  password: string;
  name: string;
  notif: Notification;

  constructor(private userService: UserService) { 
    this.notif = new Notification();
  }

  register() {
    const request = new RegisterRequest(this.login, this.password, this.name);

    console.log("Send to register", request);
    this.notif.reset();
    this.userService.registerUser(request).then(data => {
      console.log("Success register", data);
      this.notif.success("Successful registration");

    }, error => {
      console.log("Error register", error)
      this.notif.fail("Error occured, try again");
    });
  }
}