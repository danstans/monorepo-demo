import React, { useState } from "react";
import ProviderFlow from "@kariko/containers/Workflows/ProviderFlow";
import { WorkflowSidebar } from "@kariko/containers/Workflows/WorkflowSidebar";
import { Elements, ReactFlowProvider, useStoreActions, XYPosition } from "react-flow-renderer";

const position: XYPosition = { x: 0, y: 0 };

const Workflows = () => {
  const [elements] = useState<Elements>([
    {
      id: "provider-1",
      type: "input",
      data: { label: "Node 1" },
      position,
    },
    { id: "provider-2", data: { label: "Node 2" }, position },
    { id: "provider-3", data: { label: "Node 3" }, position },
    {
      id: "provider-e1-2",
      source: "provider-1",
      target: "provider-2",
    },
    { id: "provider-e1-3", source: "provider-1", target: "provider-3" },
  ]);
  const setElements = useStoreActions((actions) => actions.setElements);

  setElements(elements);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
      }}
    >
      <ReactFlowProvider>
        <ProviderFlow initialElements={elements} />
        <WorkflowSidebar></WorkflowSidebar>
      </ReactFlowProvider>
    </div>
  );
};

export default Workflows;
