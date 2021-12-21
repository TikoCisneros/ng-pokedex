export class Pokemon {
  id: number;
  name: string;
  image: string;
  base_experience: number;
  stats: Stats[];

  constructor() {}
}

interface Stats {
  name: string;
  base_stat: number;
}
