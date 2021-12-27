import { Meta, Story } from "@storybook/angular";

import { PokeInfoComponent } from './poke-info.component';

export default {
  title: 'Components/PokeInfo',
  component: PokeInfoComponent,
} as Meta;

const Template: Story<PokeInfoComponent> = (args: PokeInfoComponent) => ({
  props: args,
});

export const Default: Story = Template.bind({});

Default.args = { }
