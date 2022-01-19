import React from 'react';
import "@kariko/styles/App.css";

const DefaultLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return <div className="App">{children}</div>;
};

export default DefaultLayout;
