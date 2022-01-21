import Input from "./Input";
import { InputProps } from "./Input.types";

export default {
  title: "Shared/Input",
  component: Input,
};

const Template = (args: InputProps) => <Input {...args} />;

export const InitialStory = Template.bind({});
