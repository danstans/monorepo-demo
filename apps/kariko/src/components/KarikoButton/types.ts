import React from "react";

export type KarikoButtonProps = React.PropsWithChildren<{
  count: number;
  setCount: () => any;
  text: string;
}>;
