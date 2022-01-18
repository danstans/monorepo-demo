import react from "react";
import { ButtonProps } from "./Button.types";
import MaterialButton from '@mui/material/Button';

export const Button = ({type = 'primary', onClick, children}: ButtonProps): JSX.Element => {
  return <MaterialButton variant={'contained'} onClick={onClick}>{children}</MaterialButton>;
};
