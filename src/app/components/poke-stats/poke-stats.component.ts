import { Component, Input } from '@angular/core';
import { Stat } from 'src/app/models/pokemon';

const BAR_COLORS = ['bg-primary', 'bg-warning', 'bg-success', 'bg-danger', 'bg-info', 'bg-black'];

@Component({
  selector: 'app-poke-stats',
  templateUrl: './poke-stats.component.html',
  styleUrls: ['./poke-stats.component.css']
})
export class PokeStatsComponent {
  @Input() stats: Stat[];

  constructor() { }

  getBarColor(position: number): string {
    const colorsSize = BAR_COLORS.length;
    const index = position >= colorsSize ? position - BAR_COLORS.length : position;
    return BAR_COLORS[index];
  }

  getBarStyle(percentage: number): { [klass: string]: any; } {
    return {'width': `${percentage}%`};
  }
}
