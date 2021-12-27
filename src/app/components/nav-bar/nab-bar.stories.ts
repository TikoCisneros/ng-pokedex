import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Meta, moduleMetadata, Story } from "@storybook/angular";

import { NavBarComponent } from './nav-bar.component';

export default {
  title: 'Components/NavBar',
  component: NavBarComponent,
  decorators: [
    moduleMetadata({
      imports: [FontAwesomeModule],
    }),
  ]
} as Meta;

const Template: Story<NavBarComponent> = (args: NavBarComponent) => ({
  props: args,
});FontAwesomeModule

export const Default: Story = Template.bind({});

Default.args = {}
