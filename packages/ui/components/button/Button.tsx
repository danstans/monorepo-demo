import { ButtonProps } from "./Button.types";
import MaterialButton from "@mui/material/Button";

const sharedSyles = {
  fontWeight: "bold",
};

export const Button = (props: ButtonProps): JSX.Element => {
  const { btnVariant = "primary", onClick, children, type = "button" } = props;
  const getButtonStyles = () => {
    switch (btnVariant) {
      case "primary":
        return {
          ...sharedSyles,
          backgroundColor: "theme.palette.secondary.main",
          color: "theme.palette.text.primary",
          ":hover": {
            backgroundColor: "theme.palette.secondary.dark",
            color: "theme.palette.primary.contrastText",
          },
        };
      case "secondary":
        return {
          ...sharedSyles,
        };
      case "tertiary":
        return {
          ...sharedSyles,
        };
    }
  };

  return (
    <MaterialButton
      type={type}
      variant={"contained"}
      onClick={onClick}
      sx={getButtonStyles()}
      {...props}
    >
      {children}
    </MaterialButton>
  );
};
