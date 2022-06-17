import React, { useState } from "react";
import DefaultLayout from "@kariko/layouts/DefaultLayout";
import { useMatch } from "react-location";
import { getRandomNameQuery } from "@kariko/queries/getRandomNameQuery";
import { queryClient } from "@kariko/main";
import { Button } from "pacemaker";
import { KarikoButton } from "@kariko/components/KarikoButton";
import { useQuery } from "react-query";
import { WelcomeText } from "@kariko/components/WelcomeText/WelcomeText";
import { NavigationLink } from "@kariko/components/NavigationLink/NavigationLink";
import { countReducerAtom } from "@kariko/atoms/buttonCountAtom";
import { useAtom } from "jotai";

const Index = (data: any) => {
  const [count, setCount] = useState(0);
  const [atomCount, atomDispatch] = useAtom(countReducerAtom);

  const { name } = data;

  return (
    <>
      <WelcomeText name={name} />
      <div>
        This is the home page, the file is `pages/index.tsx` and it uses the `DefaultLayout``
      </div>
      <div>
        This is a container maintains its own state/logic and may return multiple components.
        <KarikoButton
          text={"Increase count (local)"}
          count={count}
          setCount={() => setCount(count + 1)}
        />
        <KarikoButton
          text={"Increase count (jotai global)"}
          count={atomCount}
          setCount={() => atomDispatch({ type: "inc" })}
        />
      </div>
      <NavigationLink to={"/post"}>go to post pages</NavigationLink>
    </>
  );
};

export default DefaultLayout(Index, { queryName: "index", query: getRandomNameQuery });
