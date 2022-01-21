import { TextField } from "@mui/material";
import { InputProps } from "./Input.types";

const Input = (props: InputProps): JSX.Element => {
  const {
    label,
    errorMessage,
    onChange,
    value,
    size = "small",
    type = "string",
    disabled,
    fullWidth,
  } = props;
  return (
    <TextField
      label={label}
      error={!!errorMessage}
      helperText={errorMessage}
      onChange={onChange}
      value={value}
      type={type}
      disabled={disabled}
      size={size}
      fullWidth={fullWidth}
    />
  );
};

export default Input;
