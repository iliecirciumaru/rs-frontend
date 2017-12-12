import { Component, Input } from '@angular/core';
import { Movie } from '../classes/movie';

@Component({
    selector: 'rs-movie-group',
    templateUrl: './movie-group.component.html',
})
export class MovieGroupComponent {
    @Input('subtitle') subtitle: string;
    @Input('movies') movies: Movie[];

    constructor() {
    }
}