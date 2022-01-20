import { Controller } from "react-hook-form";
import { FormInputProps, InputProps } from "./Input.types";
import { TextField } from "@mui/material";

export const Input = (props: InputProps): JSX.Element => {
  const { label, errorMessage, onChange, value, type = "string", disabled } = props;
  return (
    <TextField
      label={label}
      error={!!errorMessage}
      helperText={errorMessage}
      onChange={onChange}
      value={value}
      type={type}
      disabled={disabled}
      size="small"
    />
  );
};

export const FormInput = (props: FormInputProps) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Input
          onChange={(e: any) => {
            const newSyntheticEvent = { ...e };
            if (props.type === "number") {
              onChange({
                ...newSyntheticEvent,
                target: {
                  value: parseInt(e?.target?.value, 10),
                },
              });
            } else onChange(newSyntheticEvent);
          }}
          value={value}
          errorMessage={error?.message}
          {...props}
        />
      )}
    />
  );
};
