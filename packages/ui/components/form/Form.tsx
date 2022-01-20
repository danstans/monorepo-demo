import React from "react";

import { FormInput, Button } from "ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z.string({ required_error: "Name is required" }),
  formLastName: z.string({ required_error: "Last name is required" }),
  age: z.number().min(10),
});

export const Form = ({ defaultValues, children, onSubmit }: any): JSX.Element => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((d) => {
        console.log(d);
      })}
    >
      <FormInput name={"name"} control={control} label="First Name" />
      {/* <FormInput name={"formLastName"} control={control} label="Last Name" /> */}
      {/* <FormInput name={"age"} control={control} type="number" label="Age" /> */}
      <Button type="submit">Submit</Button>
    </form>
  );
};
