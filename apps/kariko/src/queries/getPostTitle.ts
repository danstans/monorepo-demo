import { useQuery } from "react-query";

export const getPostTitleQuery = async (postId: any) => {
  return await fetch(`https://danstans.npkn.net/get-post-title-by-post-id/${postId}`).then(
    (response) => response.json(),
  );
};
