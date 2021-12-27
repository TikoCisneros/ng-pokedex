import { Component, Input } from '@angular/core';
import { POKE_COLOR_TYPES } from './constants';


@Component({
  selector: 'app-poke-pill-type',
  templateUrl: './poke-pill-type.component.html',
  styleUrls: ['./poke-pill-type.component.css']
})
export class PokePillTypeComponent {
  @Input() typeName: string;

  constructor() { }

  getPillStyle(type: string): { [klass: string]: any; } {
    return {'background-color': POKE_COLOR_TYPES.get(type) };
  }
}
