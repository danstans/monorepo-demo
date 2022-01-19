import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../styles/theme";
import React from "react";

type Props = React.PropsWithChildren<{}>;

export const UiProvider = ({ children }: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
