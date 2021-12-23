import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
    this.loadPokemonData();
  }

  loadPokemonData() {
    const pokemonId = Number(this.route.snapshot.paramMap.get('id'));
    this.pokemon = this.pokemonService.getPokemonById(pokemonId);
  }

  returnToList() {
    this.location.back();
  }

}
