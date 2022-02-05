import React, { useState } from "react";
import ReactFlow, { Controls, NodeExtent } from "react-flow-renderer";
import { useElkLayoutedElements } from "@kariko/utils/Workflow/layout";

const nodeExtent: NodeExtent = [
  [0, 0],
  [1000, 1000],
];

const ProviderFlow = () => {
  const [layoutedElements, setLayoutedElements] = useState<any>([]);

  useElkLayoutedElements()
    .then((els) => setLayoutedElements(els))
    .catch((err) => console.error(err));

  return (
    <div
      style={{
        height: "100vh",
        width: "50%",
      }}
    >
      <div
        style={{
          height: "100%",
        }}
      >
        <>
          {!layoutedElements ? (
            <p>Loading ...</p>
          ) : (
            <ReactFlow elements={layoutedElements} nodeExtent={nodeExtent}>
              <Controls />
            </ReactFlow>
          )}
        </>
      </div>
    </div>
  );
};

export default ProviderFlow;
