import React from "react";
import { ButtonProps as MaterialButtonProps } from "@mui/material/Button/Button";

export type ButtonProps = MaterialButtonProps &
  React.PropsWithChildren<{
    href?: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    disabled?: boolean;
  }>;
