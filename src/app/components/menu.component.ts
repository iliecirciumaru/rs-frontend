import { Component, Input } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
    selector: 'rs-menu',
    templateUrl: './menu.component.html',
})
export class MenuComponent {
    @Input('user') user: User;

    constructor(private userService: UserService) {

    }

    exit() {
        this.userService.logOut();
    }
}