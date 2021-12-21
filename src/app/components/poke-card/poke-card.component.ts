import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from './../../models/pokemon';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {
  @Input() pokemon!: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

  getStatValue(statName: string): number {
    const stat = this.pokemon.stats.find(({ name }) => name === statName);

    if (!stat) {
      return 0;
    }

    return stat.base_stat;
  }
}
