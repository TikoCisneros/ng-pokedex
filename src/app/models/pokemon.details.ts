export class PokemonDetail {
  id: number;
  name: string;
  types: DetailType[];
  sprites: DetailSprites;
  stats: DetailStat[];
  base_experience: number;

  constructor() {
    this.types = [];
    this.stats = [];
  }
}

class DetailType {
  slot: number;
  type: {
    name: string;
  };
}

class DetailSprites {
  other: {
    dream_world: {
      front_default: string;
    }
  }
}

class DetailStat {
  base_stat: number;
  stat: {
    name: string;
  }
}
