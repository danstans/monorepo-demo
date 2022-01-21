import CapableSwitch from "../components/switch/Switch";
import { SwitchProps } from "../components/switch/Switch.types";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Shared/Switch",
  component: CapableSwitch,
} as Meta;

const Template = (args: SwitchProps) => <CapableSwitch {...args} />;

export const InitialStory: Story<SwitchProps> = Template.bind({});

InitialStory.args = {};
