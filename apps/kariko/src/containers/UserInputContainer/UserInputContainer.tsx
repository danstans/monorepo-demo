import React from "react";
import { useState } from "react";

import UserInputCard from "@kariko/components/UserInputCard/UserInputCard";

const UserInputContainer = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      This is a container maintains its own state/logic and may return multiple components.
      <UserInputCard text={"Button text"} count={count} setCount={() => setCount(count + 1)} />
    </div>
  );
};

export default UserInputContainer;
