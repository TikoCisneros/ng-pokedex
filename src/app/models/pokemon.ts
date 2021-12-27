export class Pokemon {
  id: number;
  name: string;
  image: string;
  base_experience: number;
  stats: Stat[];
  types: Type[];

  constructor() {}
}

export class Stat {
  name: string;
  base_stat: number;
}

export class Type {
  name: string;
}
