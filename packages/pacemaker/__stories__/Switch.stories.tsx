import Switch from "../components/switch/Switch";
import { SwitchProps } from "../components/switch/Switch.types";
import { Meta, Story } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Shared/Switch",
  component: Switch,
} as Meta;

const Template = (args: SwitchProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(args?.isChecked || false);
  return <Switch {...args} isChecked={isChecked} setIsChecked={setIsChecked} />;
};

export const NoLabel: Story<SwitchProps> = Template.bind({});

NoLabel.args = {};

export const LeftLabel: Story<SwitchProps> = Template.bind({});

LeftLabel.args = {
  label: "Label",
};

export const RightLabel: Story<SwitchProps> = Template.bind({});

RightLabel.args = {
  label: "Label",
  labelPlacement: "end",
};

export const DisabledSwitchOff: Story<SwitchProps> = Template.bind({});

DisabledSwitchOff.args = {
  disabled: true,
  isChecked: false,
};

export const DisabledSwitchOn: Story<SwitchProps> = Template.bind({});

DisabledSwitchOn.args = {
  disabled: true,
  isChecked: true,
};
