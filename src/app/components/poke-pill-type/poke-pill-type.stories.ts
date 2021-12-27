import { Meta, Story } from "@storybook/angular";
import { POKE_COLOR_TYPES } from "./constants";

import { PokePillTypeComponent } from './poke-pill-type.component';

export default {
  title: 'Components/PokePillType',
  component: PokePillTypeComponent,
  argTypes: {
    typeName: {
      options: Array.from(POKE_COLOR_TYPES.keys()),
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<PokePillTypeComponent> = (args: PokePillTypeComponent) => ({
  props: args,
});

export const Default: Story = Template.bind({});

Default.args = {
  typeName: 'normal'
}
