import Form from "../components/form/Form";
import { FormProps } from "../components/form/Form.types";
import { Meta, Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { nameForm } from "storybook/utils/formData";

export default {
  title: "Shared/Form",
  component: Form,
} as Meta;

const Template = (args: FormProps<any>) => <Form {...args} />;

export const NameForm: Story<FormProps<any>> = Template.bind({});

NameForm.args = {
  formData: nameForm,
  onSubmit: action("Form Submit"),
};
