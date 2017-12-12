import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_HOST } from '../constants';

@Injectable()
export class MovieService {

    constructor(private http: HttpClient) {}


    getMovieByID(movieID: number): Promise<any> {
        return this.http.get(`${API_HOST}/movie/${movieID}`).toPromise();
    }

    getTopMovies(): Promise<any>  {
        return this.http.get(API_HOST + '/movies/top?number=5').toPromise();
    }

    getUserRecommendedMovies(): Promise<any>  {
        return this.http.get(API_HOST + '/movies/recommended?number=5').toPromise();
    }

    getRecentReleases(): Promise<any>  {
        return this.http.get(API_HOST + '/movies/recent?number=5').toPromise();
    }

    getSimilarMovies(movieID: number): Promise<any>  {
        return this.http.get(`${API_HOST}/movie/${movieID}/similar?number=5`).toPromise();
    }

    rateMovie(movieID: number, rating: number): Promise<any> {
        var requestBody = {
            movie_id: movieID,
            rating: rating
        }

        return this.http.post(API_HOST + '/rating', requestBody).toPromise();
    }

    searchMovie(prefix: string): Promise<any> {
        return this.http.get(`${API_HOST}/movies/search?prefix=${prefix}`).toPromise();
    }

}