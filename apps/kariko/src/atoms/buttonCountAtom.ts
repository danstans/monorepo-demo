import { atomWithReducer } from "jotai/utils";

const countReducer = (prev: any, action: any) => {
  switch (action.type) {
    case "inc":
      return prev + 1;
    case "dec":
      return prev - 1;
    case "reset":
      return 0;
    default:
      throw new Error("unknown action type");
  }
};

export const countReducerAtom = atomWithReducer(0, countReducer);
