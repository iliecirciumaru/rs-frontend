import { Component, Input, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { MovieService } from '../services/movie.service';
import { Movie } from '../classes/movie';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'one-movie',
    templateUrl: './one-movie.view.html'
})
export class OneMovieComponent implements OnInit {
    // topRatedMovies: Movie[] = null;
    movie: Movie = null;
    similarMovies: Movie[];
    userMovieRating: number = 3;

    constructor(
        private movieService: MovieService,
        private route: ActivatedRoute,
        private router: Router) {

    }

    ngOnInit(): void {
        // let id = this.route.snapshot.paramMap.get('id');

        // this.movieService.getMovieByID(+id).then(data => {
        //     console.log("Succesfully fetched one movie", data);
        //     this.movie = data as Movie;
        // }).catch(error => {
        //     console.log("Error during fetching one movie", error);
        // });

        this.route.paramMap
            .switchMap((params: ParamMap) => {
                return this.movieService.getMovieByID(+params.get('id')).then(data => {
                    console.log("Succesfully fetched one movie", data);
                    this.movie = data as Movie;
                }).catch(error => {
                    console.log("Error during fetching one movie", error);
                })
            }).subscribe();


        this.route.paramMap
            .switchMap((params: ParamMap) => {
                return this.movieService.getSimilarMovies(+params.get('id')).then(data => {
                    console.log("Succesffuly fetched similar movies: ", data);
                    this.similarMovies = data as Movie[];
                }).catch(error => {
                    console.log("ERROR: ", error);
                })
            }).subscribe();
    }

    rateMovie() {
        console.log(`Mare request to put rating ${this.userMovieRating} on movie ${this.movie.id} `);
        this.movieService.rateMovie(this.movie.id, this.userMovieRating).then(data => {
            console.log('Successful request: ', data);
        }).catch(error => {
            console.log('Error occured: ', error);
        });
    }
}