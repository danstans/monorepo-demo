import React from "react";

const SidebarLayout = ({ children }: React.PropsWithChildren<Record<string, unknown>>) => {
  return <div>{children}</div>;
};

export default SidebarLayout;
