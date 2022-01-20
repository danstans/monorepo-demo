import { Form } from "./Form";
import { FormProps } from "./Form.types";
import { Meta, Story } from "@storybook/react";

import { nameForm } from "storybook/utils/formData";

export default {
  title: "Form",
  component: Form,
  argTypes: { onSubmit: { action: "Form Submit" } },
} as Meta;

const Template = (args: FormProps<any>) => <Form {...args} />;

export const NameForm: Story<FormProps<any>> = Template.bind({});

NameForm.args = {
  formData: nameForm,
};
