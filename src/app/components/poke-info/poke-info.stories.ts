import { DimensionsPipe } from '../../pipes/dimensions.pipe';
import { Pokemon } from 'src/app/models/pokemon';
import { Meta, moduleMetadata, Story } from "@storybook/angular";

import { PokeInfoComponent } from './poke-info.component';
import { StrNormalizerPipe } from 'src/app/pipes/str-normalizer.pipe';
import { PokePillTypeComponent } from '../poke-pill-type/poke-pill-type.component';

export default {
  title: 'Components/PokeInfo',
  component: PokeInfoComponent,
  decorators: [
    moduleMetadata({
      declarations: [PokePillTypeComponent, StrNormalizerPipe, DimensionsPipe],
    }),
  ]
} as Meta;

const Template: Story<PokeInfoComponent> = (args: PokeInfoComponent) => ({
  props: args,
});

export const Default: Story = Template.bind({});

const pokemon = new Pokemon();
pokemon.base_experience = 240;
pokemon.height = 17;
pokemon.weight = 905;
pokemon.types = ['fire', 'flying'];
pokemon.abilities = ['blaze', 'solar-power'];

Default.args = {
  pokemon,
}
