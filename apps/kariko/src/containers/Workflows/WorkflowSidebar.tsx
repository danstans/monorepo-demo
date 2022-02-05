import React from "react";
import { useStoreState, useStoreActions } from "react-flow-renderer";

export const WorkflowSidebar = () => {
  const nodes = useStoreState((store) => store.nodes);
  const setSelectedElements = useStoreActions((actions) => actions.setSelectedElements);

  const getSelectedElements = useStoreState((store) => store.selectedElements);
  const selectedNodes = getSelectedElements || [];

  const selectAll = () => {
    setSelectedElements(nodes.map((node) => ({ id: node.id, type: node.type })));
  };

  return (
    <aside>
      <div className="title">Nodes</div>
      {selectedNodes.map((node) => (
        <div key={node.id}>{node?.id}</div>
      ))}

      <div className="selectall">
        <button onClick={selectAll}>select all nodes</button>
      </div>
    </aside>
  );
};
