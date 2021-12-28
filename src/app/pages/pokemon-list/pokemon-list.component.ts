import { Component, OnDestroy, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { forkJoin, Observable, Subscription } from 'rxjs';

import { PokemonList } from '../../models/pokemon.list';
import { PokemonDetail } from '../../models/pokemon.details';
import { Pokemon } from 'src/app/models/pokemon';

import { PokemonService } from '../../services/pokemon.service';
import { PokemonHttpService } from '../../services/pokemon-http.service';
import { Router } from '@angular/router';

const POKEMON_NUMBER = 600;

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit , OnDestroy{
  private pokeChangeSub: Subscription;

  pokemons: Pokemon[] = [];
  isLoading: boolean = false;

  constructor(
    private pokemonHttpService: PokemonHttpService,
    private pokemonService: PokemonService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.pokeChangeSub = this.pokemonService.pokemonsChanges.subscribe((list: Pokemon[]) => this.pokemons = list);

    this.getPokemonPage();
  }

  ngOnDestroy(): void {
    this.pokeChangeSub.unsubscribe();
  }

  getPokemonPage() {
    this.isLoading = true;

    const pokemonData = this.pokemonService.getPokemons();

    if (pokemonData.length > 0) {
      this.pokemons = pokemonData;
      this.isLoading = false;
      return;
    }

    this.pokemonHttpService.getPokemonList(POKEMON_NUMBER)
      .subscribe((list: PokemonList[]) => this.getPokemonDetail(list));
  }

  buildPokemonDetailObservable(list: PokemonList[]): Observable<PokemonDetail>[] {
    return list.map(({ name }) => this.pokemonHttpService.getPokemonDetail(name));
  }

  getPokemonDetail(list: PokemonList[]) {
    forkJoin([...this.buildPokemonDetailObservable(list)])
      .pipe(
        map<PokemonDetail[], Pokemon[]>((pokemonDetails) => {
          return pokemonDetails.map(({
            id,
            name,
            base_experience,
            sprites: { other: { dream_world: { front_default }, "official-artwork": { front_default: official_image } } },
            stats,
            abilities,
            types,
            weight,
            height
          }) => ({
            id,
            name,
            base_experience,
            image: front_default,
            official_image,
            weight,
            height,
            stats: stats.map(({ base_stat, stat: { name } }) => ({ name, base_stat })),
            types: types.map(({ type: { name } }) => name),
            abilities: abilities.map(({ ability: { name } }) => name)
          }))
        })
      )
      .subscribe((pokemons: Pokemon[]) => {
        this.isLoading = false;
        this.pokemonService.addPokemons(pokemons);
      })
  }

  showPokemonDetails(id: number) {
    this.router.navigate(['pokemon', id]);
  }

  searchPokemonByName(pokemonName: string) {
    if(pokemonName.trim().length === 0) {
      this.pokemons = this.pokemonService.getPokemons();
      return;
    }

    this.pokemons = [...this.pokemons].filter(({ name }) => name.includes(pokemonName));
  }
}
