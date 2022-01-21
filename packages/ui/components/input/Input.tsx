import { TextField } from "@mui/material";
import { InputProps } from "./Input.types";

const Input = (props: InputProps): JSX.Element => {
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

export default Input;
