import { Component, OnDestroy, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { forkJoin, Observable, Subscription } from 'rxjs';

import { PokemonList } from '../../models/pokemon.list';
import { PokemonDetail } from '../../models/pokemon.details';
import { Pokemon } from '../../models/pokemon';

import { PokemonService } from '../../services/pokemon.service';
import { PokemonHttpService } from '../../services/pokemon-http.service';
import { Router } from '@angular/router';

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
    this.pokemonHttpService.getPokemonList()
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
            sprites: { other: { dream_world: { front_default } } },
            stats,
          }) => ({
            id,
            name,
            base_experience,
            image: front_default,
            stats: stats.map(({ base_stat, stat: { name } }) => ({ name, base_stat })),
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
}
