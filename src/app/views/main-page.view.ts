import { Component, Input, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { MovieService } from '../services/movie.service';
import { Movie } from '../classes/movie';

@Component({
    selector: 'rs-main-page',
    templateUrl: './main-page.view.html'
})
export class MainPageComponent implements OnInit{
    topRatedMovies: Movie[] = null;
    recommendedMovies: Movie[] = null;
    recenteMovies: Movie[] = null;
    // @Input('user') user: User;

    constructor(private movieService: MovieService) {

    }

    ngOnInit(): void {
        this.movieService.getUserRecommendedMovies().then(data => {
            console.log("Succesffuly fetched recommended movies: ", data);
            this.recommendedMovies = data as Movie[];
        }).catch(error => {
            console.log("ERROR: ", error);
        });


        this.movieService.getTopMovies().then(data => {
            console.log("Succesffuly fetched top movies: ", data);
            this.topRatedMovies = data as Movie[];
        }).catch(error => {
            console.log("ERROR: ", error);
        });

        this.movieService.getRecentReleases().then(data => {
            console.log("Succesffuly fetched recent movies: ", data);
            this.recenteMovies = data as Movie[];
        }).catch(error => {
            console.log("ERROR: ", error);
        });
    }
}