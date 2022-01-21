import { FormInput, Button } from "ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const Form = ({ formData, onSubmit }: any): JSX.Element => {
  const { schema, defaultValues } = formData?.reduce(
    (prev: any, curr: any) => {
      return {
        schema: { ...prev.schema, [curr?.name]: curr.schema },
        defaultValues: { ...prev.defaultValues, [curr?.name]: curr.defaultValue },
      };
    },
    {
      schema: {},
      defaultValues: {},
    },
  );

  const formSchema = z.object(schema);

  const { handleSubmit, control } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const getFormComponentByZodType = (name: any, schema: any, props: any) => {
    switch (schema?._def?.typeName) {
      case "ZodString": {
        return <FormInput name={name} control={control} {...props} />;
      }
      case "ZodNumber": {
        return <FormInput name={name} control={control} {...props} type="number" />;
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit((d) => {
        onSubmit(d);
      })}
    >
      {formData?.map((formObject: any) => {
        const { name, schema, props } = formObject;
        return getFormComponentByZodType(name, schema, props);
      })}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
