import { Form } from "./Form";
import { FormProps } from "./Form.types";

export default {
  title: "Form",
  component: Form,
};

const Template = (args: FormProps) => <Form {...args} />;

export const InitialStory = Template.bind({});
