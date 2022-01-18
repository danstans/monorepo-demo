import { Switch } from "./Switch"
import { SwitchProps } from "./Switch.types"

export default {
    title: 'Switch',
    component: Switch,
  };

const Template = (args: SwitchProps) => <Switch {...args} />;

export const InitialStory = Template.bind({});