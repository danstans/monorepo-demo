import React from "react";
import { Button } from "ui";
import { UserInputCardProps } from "./types";

function UserInputCard({ count, text, setCount }: UserInputCardProps) {
  return (
    <div>
      <Button type={"secondary"} onClick={setCount}>
        {text}
        {count}
      </Button>
    </div>
  );
}

export default UserInputCard;
