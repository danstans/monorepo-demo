import { useQuery } from "react-query";

export const getRandomNameQuery = async () => {
  return await fetch("https://danstans.npkn.net/get-random-name/").then((response) =>
    response.json(),
  );
};
