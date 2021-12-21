import { Injectable } from '@angular/core';

const POKE_API_URL = 'https://pokeapi.co/api/v2/';
const IMAGE_BASE_URL = 'https://cdn.traction.one/pokedex/pokemon/'; // from https://pokedevs.gitbook.io/pokedex/

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }
}
