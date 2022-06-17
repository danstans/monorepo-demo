import React from "react";
import { Button } from "pacemaker";
import { KarikoButtonProps } from "./types";

function KarikoButton({ count, text, setCount }: KarikoButtonProps) {
  return (
    <div>
      <Button color={"secondary"} onClick={setCount}>
        {text}
        {count}
      </Button>
    </div>
  );
}

export default KarikoButton;
