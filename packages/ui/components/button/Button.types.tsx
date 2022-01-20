import React from "react";
import { ButtonProps as MaterialButtonProps } from "@mui/material/Button/Button";

export type ButtonProps = MaterialButtonProps &
  React.PropsWithChildren<{
    btnVariant?: "primary" | "secondary" | "tertiary";
    href?: string;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    disabled?: boolean;
  }>;
