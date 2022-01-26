import { ButtonProps } from "./Button.types";
import MaterialButton from "@mui/material/Button";
import { Color, Theme } from "@mui/material";

const sharedSyles = {
  fontWeight: "bold",
};

const Button = (props: ButtonProps): JSX.Element => {
  const { color = "primary", onClick, children, type = "button", disabled } = props;

  const getVariant = () => {
    switch (color) {
      case "secondary":
        return "outlined";
      default:
        return "contained";
    }
  };

  const getTypography = () => {
    switch (color) {
      case "secondary":
        return "outlinedBtn";
      default:
        return "containedBtn";
    }
  };

  return (
    <MaterialButton
      type={type}
      variant={getVariant()}
      onClick={onClick}
      color={color}
      disableElevation
      disabled={disabled}
      sx={{
        typography: getTypography(),
      }}
      {...props}
    >
      {children}
    </MaterialButton>
  );
};

export default Button;
