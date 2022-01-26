import Button from "../components/button/Button";
import { ButtonProps } from "../components/button/Button.types";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Shared/Button",
  component: Button,
} as Meta;

const Template = (args: ButtonProps) => <Button {...args}></Button>;

export const FirstStory: Story<ButtonProps> = Template.bind({});

FirstStory.args = {
  children: "Save",
};

export const SecondStory: Story<ButtonProps> = Template.bind({});

SecondStory.args = {
  color: "secondary",
  children: "Cancel",
};

export const ThirdStory: Story<ButtonProps> = Template.bind({});

ThirdStory.args = {
  color: "tertiary",
  children: "Save",
};
