import React from 'react';
import "../styles/App.css";

const DefaultLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return <div className="App">{children}</div>;
};

export default DefaultLayout;
