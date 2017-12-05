import { Component, Input } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
    selector: 'rs-main-page',
    template: `
    <div>Welcome to main page</div>
    `
})
export class MainPageComponent {
    @Input('user') user: User;

    constructor(private userService: UserService) {

    }
}