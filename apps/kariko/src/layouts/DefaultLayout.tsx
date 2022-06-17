import React from "react";
import "@kariko/styles/App.css";
import { useQuery } from "react-query";

const DefaultLayout = (Component: any, Query: any) => {
  return (props: any) => {
    const { status, error, data }: any = useQuery(Query.queryName, Query.query);

    if (status === "loading") {
      return <span>Loading...</span>;
    }

    if (status === "error") {
      return <span>Error: {error.message}</span>;
    }

    return <Component data={data} {...props} />;
  };
};

export default DefaultLayout;
