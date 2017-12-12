import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'info'})
export class InfoPipe implements PipeTransform {
  transform(value: string): string {
     if (value == null || value == "") return null;
     return value.replace(/\|/g,", ");
  }
}