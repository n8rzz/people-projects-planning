import './BasicNode.css';
import { Handle, NodeProps, Position } from 'reactflow';
import { IProject } from '../../../domain/projects/project.types';

interface IProps {}

export function BasicNode(props: NodeProps<IProps & IProject>) {
  console.log('---', props);

  return (
    <div className={'basicNode'}>
      <Handle
        type="source"
        position={Position.Right}
      />
      <div>{props.data.name}</div>
      <Handle
        type="source"
        position={Position.Left}
      />
    </div>
  );
}
