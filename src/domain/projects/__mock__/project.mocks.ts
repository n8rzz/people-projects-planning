import { IProject } from '../project.types';
import { ProjectBucket } from '../project.constants';

export const projectListMock: IProject[] = [
  {
    bucket: ProjectBucket.Current,
    id: '1',
    name: 'Messaging',
    order: -1,
  },
  {
    bucket: ProjectBucket.NotScheduled,
    id: '2',
    name: 'Path to Value',
    order: -1,
  },
  {
    bucket: ProjectBucket.NotScheduled,
    id: '3',
    name: 'Financials Part 3',
    order: -1,
  },
  {
    bucket: ProjectBucket.NotScheduled,
    id: '4',
    name: 'Canvas Shaper',
    order: -1,
  },
];
