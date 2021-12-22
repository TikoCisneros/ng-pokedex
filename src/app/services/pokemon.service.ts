import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private pokemons: Pokemon[] = [];

  pokemonsChanged = new Subject<Pokemon[]>();

  private subscribeUpdatePokemons() {
    this.pokemonsChanged.next(this.pokemons.slice());
  }

  getPokemons(): Pokemon[] {
    return this.pokemons.slice();
  }

  addPokemons(list: Pokemon[]) {
    this.pokemons = [ ...this.pokemons, ...list ];
    this.subscribeUpdatePokemons();
  }
}
