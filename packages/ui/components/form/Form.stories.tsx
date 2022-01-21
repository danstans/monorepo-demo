import Form from "./Form";
import { FormProps } from "./Form.types";
import { Meta, Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { nameForm } from "storybook/utils/formData";

export default {
  title: "Form",
  component: Form,
} as Meta;

const Template = (args: FormProps<any>) => <Form {...args} />;

export const NameForm: Story<FormProps<any>> = Template.bind({});

NameForm.args = {
  formData: nameForm,
  onSubmit: action("Form Submit"),
};
