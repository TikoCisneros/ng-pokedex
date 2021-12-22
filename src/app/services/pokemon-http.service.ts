import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PokemonList } from '../models/pokemon.list';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PokemonDetail } from '../models/pokemon.details';

const BASE_URL = 'https://pokeapi.co/api/v2/';

@Injectable({
  providedIn: 'root',
})
export class PokemonHttpService {
  constructor(private http: HttpClient) {}

  getPokemonList(
    offset: number = 0,
    limit: number = 20
  ): Observable<PokemonList[]> {
    return this.http
      .get<PokemonList[]>(`${BASE_URL}pokemon?limit=${limit}&offset=${offset}`)
      .pipe(map((x: any) => x.results));
  }

  getPokemonDetail(pokemon: number | string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(`${BASE_URL}pokemon/${pokemon}`);
  }
}

