import { Button } from "./Button";
import { ButtonProps } from "./Button.types";

export default {
  title: "Button",
  component: Button,
};

const Template = (args: ButtonProps) => <Button {...args}>Hello world</Button>;

export const FirstStory = Template.bind({
  type: "primary",
});

export const SecondStory = Template.bind({
  type: "secondary",
});
