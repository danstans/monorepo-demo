import react from "react";
import { ButtonProps } from "./Button.types";
import MaterialButton from "@mui/material/Button";

const sharedSyles = {
  fontWeight: "bold",
};

export const Button = ({
  type = "primary",
  onClick,
  children,
}: ButtonProps): JSX.Element => {
  const getButtonStyles = () => {
    switch (type) {
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
      variant={"contained"}
      onClick={onClick}
      sx={getButtonStyles()}
    >
      {children}
    </MaterialButton>
  );
};
