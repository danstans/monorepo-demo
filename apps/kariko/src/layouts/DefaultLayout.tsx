import React from "react";
import "@kariko/styles/App.css";

const DefaultLayout = ({ children }: React.PropsWithChildren<Record<string, unknown>>) => {
  return <div className="App">{children}</div>;
};

export default DefaultLayout;
