import React from "react";
import { DeepPartial, SubmitHandler, UnpackNestedValue } from "react-hook-form";

export type FormProps<TFields> = React.PropsWithChildren<{
  defaultValues: UnpackNestedValue<DeepPartial<any>>;
  onSubmit: SubmitHandler<TFields>;
}>;
