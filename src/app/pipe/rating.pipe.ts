import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'rating'})
export class RatingPipe implements PipeTransform {
  transform(value: number): number {
    let rating = value;
    if (rating > 5) rating = 5;
    return rating;
  }
}