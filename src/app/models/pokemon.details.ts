export class PokemonDetail {
  id: number;
  name: string;
  types: DetailType[];
  sprites: DetailSprites;
  stats: DetailStat[];
  abilities: DetailAbilities[];
  base_experience: number;
  weight: number;
  height: number;

  constructor() {
    this.types = [];
    this.stats = [];
    this.abilities = [];
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

class DetailAbilities {
  ability: {
    name: string;
  }
}
