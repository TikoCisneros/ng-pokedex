import { Meta, Story } from "@storybook/angular";
import { Pokemon } from "src/app/models/pokemon";

import { PokeCardComponent } from './poke-card.component';

export default {
  title: 'Components/PokeCard',
  component: PokeCardComponent,
} as Meta;

const Template: Story<PokeCardComponent> = (args: PokeCardComponent) => ({
  props: args,
});

export const Default: Story = Template.bind({});

const pokemon = new Pokemon();
pokemon.id = 21;
pokemon.name = "bulbasaur";
pokemon.base_experience = 64;
pokemon.image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg";
pokemon.stats = [
  { name: "attack", base_stat: 49 },
  { name: "defense", base_stat: 50 },
  { name: "special-attack", base_stat: 65 },
]

Default.args = {
  pokemon,
}
