export class PokemonDetail {
  id: number;
  name: string;
  types: PokemonType[];
  sprites: PokemonSprites;
  stats: PokemonStat[];
  base_experience: number;

  constructor() {
    this.types = [];
    this.stats = [];
  }
}

class PokemonType {
  slot: number;
  type: {
    name: string;
  };
}

class PokemonSprites {
  other: {
    dream_world: {
      front_default: string;
    }
  }
}

class PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  }
}
