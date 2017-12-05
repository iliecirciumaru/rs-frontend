import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './classes/user';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="isLoggedIn()">    
      <rs-menu [user]="user"></rs-menu>
    </div>  
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  user: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.isLoggedIn();
  }

  isLoggedIn(): boolean {
    this.user = this.userService.user;

    return this.userService.isUserSignedIn();
  }
}
