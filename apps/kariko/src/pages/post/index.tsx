import { countReducerAtom } from "@kariko/atoms/buttonCountAtom";
import { KarikoButton } from "@kariko/components/KarikoButton";
import { NavigationLink } from "@kariko/components/NavigationLink/NavigationLink";
import { useAtom } from "jotai";
import React from "react";

const postIndex = () => {
  const [atomCount, atomDispatch] = useAtom(countReducerAtom);

  return (
    <div>
      This is the main route for each post page. Here is a demo of a global state w/ reducer using
      jotai atoms.
      <KarikoButton
        text={"Increase count (jotai)"}
        count={atomCount}
        setCount={() => atomDispatch({ type: "inc" })}
      />
      <br />
      <KarikoButton
        text={"Decrease count (jotai)"}
        count={atomCount}
        setCount={() => atomDispatch({ type: "dec" })}
      />
      <br />
      <KarikoButton
        text={"Reset count (jotai)"}
        count={atomCount}
        setCount={() => atomDispatch({ type: "reset" })}
      />
      <br />
      This value will persist when traversing between pages (click the back button).
      <br />
      <NavigationLink to={`/`}>
        Go back to the main route (Your name is cached, but your local button state is not)
      </NavigationLink>
      <br />
      <NavigationLink to={`/post/${Math.round(Math.random() * 4) + 1}`}>
        Lets check out a unique post
      </NavigationLink>
    </div>
  );
};

export default postIndex;
