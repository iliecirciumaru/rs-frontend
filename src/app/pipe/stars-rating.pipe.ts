import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'starsrating'})
export class StarsRatingPipe implements PipeTransform {
  transform(value: number): string {
    let stars = Math.round(value);
    let res = "";
    for (let i = 0; i < stars; i++) {
      // res += '<span class="oi" data-glyph="star"></span>';
      res += '<img src="/assets/open-iconic/svg/star.svg">'
    } 

    return res;
  }
}