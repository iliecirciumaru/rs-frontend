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
    foundMovies: Movie[] = null;
    searchPrefix:string;
    searchDone: boolean;
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

    searchMovie() {
        console.log("Start search...prefix: ", this.searchPrefix);
        this.movieService.searchMovie(this.searchPrefix).then(data => {
            console.log("Succesffuly searched movies: ", data);
            const movies = data as Movie[];
            if (movies.length) {
                this.foundMovies = movies;
            } else {
                this.foundMovies = null;
            }
            this.searchDone = true;
        }).catch(error => {
            console.log("ERROR: ", error);
        });
    }
}