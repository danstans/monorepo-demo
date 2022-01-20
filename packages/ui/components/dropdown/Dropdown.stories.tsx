import { Dropdown } from "./Dropdown";
import { DropdownProps } from "./Dropdown.types";

export default {
  title: "Dropdown",
  component: Dropdown,
};

const Template = (args: DropdownProps) => <Dropdown {...args} />;

export const InitialStory = Template.bind({});
