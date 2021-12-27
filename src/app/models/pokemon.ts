export class Pokemon {
  id: number;
  name: string;
  image: string;
  base_experience: number;
  stats: Stat[];
  types: string[];
  abilities: string[];
  weight: number;
  height: number;

  constructor() {}
}

export class Stat {
  name: string;
  base_stat: number;
}
