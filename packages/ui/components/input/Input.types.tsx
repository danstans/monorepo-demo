import { FieldError } from "react-hook-form/dist/types";
import { TextFieldProps } from "@mui/material/TextField/TextField";
import React from "react";

export type InputProps = TextFieldProps &
  React.PropsWithChildren<{
    errorMessage?: FieldError | string;
    type?: string;
  }>;

export type FormInputProps = InputProps & {
  name: string;
  control: any;
};
