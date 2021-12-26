import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strNormalizer'
})
export class StrNormalizerPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/-/g,' ');
  }
}
