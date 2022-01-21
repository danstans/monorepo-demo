import { FormInput, Button } from "pacemaker";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Grid from "@mui/material/Grid";

/**
 * Capable form component is built with react-hook-form. This component currently supports TextInput - string and number.
 */
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
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {formData?.map((formObject: any, formObjectIndex: number) => {
          const {
            name,
            schema,
            props,
            breakpoints: { xs, sm, md, lg },
          } = formObject;
          return (
            <Grid
              item
              xs={xs}
              sm={sm || xs}
              md={md || sm || xs}
              lg={lg || md || sm || xs}
              key={formObjectIndex}
            >
              {getFormComponentByZodType(name, schema, props)}
            </Grid>
          );
        })}
      </Grid>

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
