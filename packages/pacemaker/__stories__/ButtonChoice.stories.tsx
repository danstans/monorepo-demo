import ButtonChoice from "../components/button-choice//ButtonChoice";
import { ButtonChoiceProps } from "../components/button-choice/ButtonChoice.types";
import { Meta, Story } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Shared/ButtonChoice",
  component: ButtonChoice,
} as Meta;

const Template = (args: ButtonChoiceProps) => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (num: number): void => {
    setValue(num);
  };

  return <ButtonChoice {...args} value={value} handleChange={handleChange} />;
};

export const InitialStory: Story<ButtonChoiceProps> = Template.bind({});

InitialStory.args = {
  choices: [
    {
      text: "Any",
      value: "any",
    },
    {
      text: "All",
      value: "All",
    },
  ],
};
