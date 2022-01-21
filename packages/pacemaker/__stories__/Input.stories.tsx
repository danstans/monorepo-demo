import Input from "../components/input/Input";
import { InputProps } from "../components/input/Input.types";

export default {
  title: "Shared/Input",
  component: Input,
};

const Template = (args: InputProps) => <Input {...args} />;

export const InitialStory = Template.bind({});
