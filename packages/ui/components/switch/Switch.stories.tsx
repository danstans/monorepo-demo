import CapableSwitch from "./Switch";
import { SwitchProps } from "./Switch.types";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Switch",
  component: CapableSwitch,
} as Meta;

const Template = (args: SwitchProps) => <CapableSwitch {...args} />;

export const InitialStory: Story<SwitchProps> = Template.bind({});

InitialStory.args = {};
