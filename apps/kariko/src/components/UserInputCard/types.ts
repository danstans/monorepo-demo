import React from "react";

export type UserInputCardProps = React.PropsWithChildren<{
  count: number;
  setCount: () => any;
  text: string;
}>;
