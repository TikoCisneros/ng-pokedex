import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  faBack = faArrowLeft;
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
