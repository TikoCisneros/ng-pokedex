import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from './../../models/pokemon';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {
  @Input() pokemon!: Pokemon;
  @Output() onClick: EventEmitter<number> = new EventEmitter<number>();

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

  onClickPokemon() {
    this.onClick.emit(this.pokemon.id);
  }
}
