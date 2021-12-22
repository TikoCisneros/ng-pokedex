export class Pokemon {
  id: number;
  name: string;
  image: string;
  base_experience: number;
  stats: Stats[];

  constructor() {}
}

class Stats {
  name: string;
  base_stat: number;
}
