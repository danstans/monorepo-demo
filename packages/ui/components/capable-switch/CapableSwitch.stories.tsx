import { CapableSwitch } from "./CapableSwitch";
import { CapableSwitchProps } from "./CapableSwitch.types";

export default {
  title: "CapableSwitch",
  component: CapableSwitch,
};

const Template = (args: CapableSwitchProps) => <CapableSwitch {...args} />;

export const InitialStory = Template.bind({});
