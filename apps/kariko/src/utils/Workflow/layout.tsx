import ELK from "elkjs/lib/elk.bundled.js";
import { isNode, useStoreState } from "react-flow-renderer";

const nodeWidth = 200;
const nodeHeight = 60;

export const useElkLayoutedElements = async (): Promise<any[]> => {
  const layoutedNodes = useStoreState((store) => store.nodes);
  // const layoutedEdges = useStoreState((store) => store.edges);
  const elements = [...layoutedNodes, layoutedNodes];
  const elk = new ELK({
    defaultLayoutOptions: {
      "elk.algorithm": "mrtree",
      "elk.direction": "DOWN",
      "elk.spacing.nodeNode": "75",
      "elk.layered.spacing.nodeNodeBetweenLayers": "10",
    },
  });

  const nodes: any[] = [];
  const edges: any[] = [];

  elements.forEach((el) => {
    if (isNode(el)) {
      console.log(el.__rf);
      nodes.push({
        id: el.id,
        width: el.__rf?.width ?? nodeWidth,
        height: el.__rf?.height ?? nodeHeight,
      });
    } else {
      edges.push({
        id: el.id,
        target: el.target,
        source: el.source,
      });
    }
  });

  const newGraph = await elk.layout({
    id: "root",
    children: nodes,
    edges: edges,
  });
  return elements.map((el) => {
    if (isNode(el)) {
      const node = newGraph?.children?.find((n) => n.id === el.id);
      if (node?.x && node?.y && node?.width && node?.height) {
        el.position = {
          x: node.x - node.width / 2 + Math.random() / 1000,
          y: node.y - node.height / 2,
        };
      }
    }
    return el;
  });
};
