'use client';
import { useState, useCallback } from 'react';
import { 
  ReactFlow, 
  MiniMap,
  applyNodeChanges, 
  applyEdgeChanges, 
  addEdge,
  type Node,
  type Edge,
  type NodeChange,
  type EdgeChange,
  type Connection,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { ResistanceNode } from './Resistance';
 
const initialNodes: Node[] = [
  { id: 'n1', position: { x: 0, y: 0 }, data: { label: 'Node 1' }, type: 'resistance' },
  { id: 'n2', position: { x: 0, y: 100 }, data: { label: 'Node 2' }, type: 'resistance' },
];
const initialEdges: Edge[] = [{ id: 'n1-n2', source: 'n1', target: 'n2', type: 'straight', style: {
  strokeWidth: 2,
  stroke: 'black',
}, }];
 
export default function Circuit() {

  const nodeTypes = {
    resistance: ResistanceNode,
  };

  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
 
  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect = useCallback(
    (params: Connection) => setEdges((edgesSnapshot) => addEdge({ ...params, type: 'straight', style: {
      strokeWidth: 2,
      stroke: 'black',
    }, }, edgesSnapshot)),
    [],
  );

  const addResistanceNode = useCallback(() => {
    setNodes([...nodes, { id: `n${nodes.length + 1}`, position: { x: 0, y: nodes.length * 100 }, data: { label: `Resistance ${nodes.length + 1}` }, type: 'resistance' }]);
  }, [nodes]);

  const nodeColor = (node: Node) => {
    switch (node.type) {
      case 'input':
        return '#6ede87';
      case 'output':
        return '#6865A5';
      default:
        return '#ff0072';
    }
  };
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <button onClick={addResistanceNode}>Add Resistance</button>
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} zoomable pannable />
      </ReactFlow>
    </div>
  );
}