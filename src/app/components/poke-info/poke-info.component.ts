import { Component, Input } from '@angular/core';

import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.css']
})
export class PokeInfoComponent {
  @Input() pokemon: Pokemon

  constructor() { }

}
