import React from "react";
import { Button } from "pacemaker";
import { UserInputCardProps } from "./types";

function UserInputCard({ count, text, setCount }: UserInputCardProps) {
  return (
    <div>
      <Button btnVariant={"secondary"} onClick={setCount}>
        {text}
        {count}
      </Button>
    </div>
  );
}

export default UserInputCard;
