import { TabsUnstyledProps } from "@mui/material";

interface Choice {
  text: string;
  value: any;
}

export type ButtonChoiceProps = TabsUnstyledProps &
  React.PropsWithChildren<{
    choices: Array<Choice>;
    handleChange: (number: number) => void;
  }>;
