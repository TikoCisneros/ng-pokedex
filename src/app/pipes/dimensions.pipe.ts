import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dimensions'
})
export class DimensionsPipe implements PipeTransform {

  transform(value: number): string {
    return (value * 0.1).toFixed(1);
  }

}
