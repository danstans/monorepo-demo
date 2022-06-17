import { countReducerAtom } from "@kariko/atoms/buttonCountAtom";
import { KarikoButton } from "@kariko/components/KarikoButton";
import { NavigationLink } from "@kariko/components/NavigationLink/NavigationLink";
import { getPostTitleQuery } from "@kariko/queries/getPostTitle";
import { useAtom } from "jotai";
import React from "react";
import { useMatch } from "react-location";
import { useQuery } from "react-query";

const PostId = () => {
  const {
    params: { postId },
  } = useMatch();
  const { status, error, data }: any = useQuery(["post-id", postId], () =>
    getPostTitleQuery(postId),
  );

  if (status === "loading") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      This page route is `src/pages/post/[postId].tsx`. You can fetch the post using the postId from
      above.
      <br />
      The postId for this page is {postId} and the title returned from the API is {data.title}
      <br />
      The API will fetch the post title
      <br />
      {parseInt(postId) !== 1 && (
        <NavigationLink to={`/post/${parseInt(postId) - 1}`}>Go to previous post</NavigationLink>
      )}
      <br />
      {parseInt(postId) !== 5 && (
        <NavigationLink to={`/post/${parseInt(postId) + 1}`}>Go to next post</NavigationLink>
      )}
    </div>
  );
};

export default PostId;
