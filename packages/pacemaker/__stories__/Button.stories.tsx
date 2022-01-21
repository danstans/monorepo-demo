import Button from "../components/button/Button";
import { ButtonProps } from "../components/button/Button.types";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Shared/Button",
  component: Button,
} as Meta;

const Template = (args: ButtonProps) => <Button {...args}>Hello world</Button>;

export const FirstStory: Story<ButtonProps> = Template.bind({});

FirstStory.args = {};

export const SecondStory: Story<ButtonProps> = Template.bind({});

SecondStory.args = {};
