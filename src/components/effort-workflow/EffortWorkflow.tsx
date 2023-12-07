import 'reactflow/dist/style.css';
import ReactFlow, { Background, Edge, Node } from 'reactflow';
import { IProject } from '../../domain/projects/project.types';
import { BasicNode } from './nodes/BasicNode';
import { useMemo } from 'react';
import { buildInitialEdges, buildInitialNodes } from './EffortWorkflow.utils';

interface IProps {
  buckets: IProject[][];
}

export function EffortWorkflow(props: IProps) {
  const initialNodes: Node[] = buildInitialNodes(props.buckets);
  const initialEdges: Edge[] = buildInitialEdges(props.buckets);

  console.log('+++ initialNodes', initialNodes);
  console.log('+++ initialEdges', initialEdges);

  const nodeTypes = useMemo(() => ({ basicNode: BasicNode }), []);

  return (
    <div className={'effortWorkflow'}>
      <ReactFlow
        edges={initialEdges}
        nodes={initialNodes}
        nodeTypes={nodeTypes}
      >
        <Background />
      </ReactFlow>
    </div>
  );
}
