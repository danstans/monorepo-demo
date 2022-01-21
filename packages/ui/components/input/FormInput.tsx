import { Controller } from "react-hook-form";
import { FormInputProps } from "./Input.types";
import Input from "./Input";

const FormInput = (props: FormInputProps) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Input
          fullWidth
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

export default FormInput;
