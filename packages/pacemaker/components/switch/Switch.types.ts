import { SwitchBaseProps } from "@mui/material/internal/SwitchBase";

export type SwitchProps = SwitchBaseProps &
  React.PropsWithChildren<{
    label?: string | React.ReactElement;
    labelPlacement?: "start" | "end";
    isChecked: boolean;
    setIsChecked: (isChecked: boolean) => void;
    style?: React.CSSProperties;
  }>;
