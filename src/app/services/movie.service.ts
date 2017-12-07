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
        return this.http.get(API_HOST + '/top?limit=5').toPromise();
    }

    getUserRecommendedMovies(): Promise<any>  {
        return null;
    }

    getRecentReleases(): Promise<any>  {
        return null;
    }

    getContextRecommendation(): Promise<any>  {
        return null;
    }

    rateMovie(movieID: number, rating: number): Promise<any> {
        var requestBody = {
            movie_id: movieID,
            rating: rating
        }

        return this.http.post(API_HOST + '/rating', requestBody).toPromise();
    }

}