import { IProject } from '../../domain/projects/project.types';

interface IProps {
  buckets: IProject[][];
}

export function EffortWorkflow(props: IProps) {
  console.log('+++', props.buckets);

  return <div className={'effortWorkflow'}>EFFORT WORKFLOW</div>;
}
