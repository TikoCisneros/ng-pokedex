import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { Stat } from "src/app/models/pokemon";
import { StrNormalizerPipe } from "src/app/pipes/str-normalizer.pipe";

import { PokeStatsComponent } from './poke-stats.component';

export default {
  title: 'Components/PokeStats',
  component: PokeStatsComponent,
  decorators: [
    moduleMetadata({
      declarations: [StrNormalizerPipe],
    }),
  ]
} as Meta;

const Template: Story<PokeStatsComponent> = (args: PokeStatsComponent) => ({
  props: args,
});

export const Default: Story = Template.bind({});

const stats: Stat[] = [
  { name: 'hp', base_stat: 45 },
  { name: 'attack', base_stat: 49 },
  { name: 'defense', base_stat: 49 },
  { name: 'special-attack', base_stat: 65 },
  { name: 'special-defense', base_stat: 65 },
  { name: 'speed', base_stat: 48 },
]

Default.args = { stats }
