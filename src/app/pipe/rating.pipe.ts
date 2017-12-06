import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'rsrating'})
export class RatingPipe implements PipeTransform {
  transform(value: number): string {
    const stars = Math.round(value);
    let res = "";
    for (let i = 0; i < stars; i++) {
      // res += '<span class="oi" data-glyph="star"></span>';
      res += '<img src="/assets/open-iconic/svg/star.svg">'
    } 

    return res;
  }
}