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
  {
    bucket: ProjectBucket.NotScheduled,
    id: '5',
    name: 'PM V2',
    order: -1,
  },
  {
    bucket: ProjectBucket.NotScheduled,
    id: '6',
    name: 'Monday.com Integration',
    order: -1,
  },
  {
    bucket: ProjectBucket.NotScheduled,
    id: '7',
    name: 'Quickbooks Online Integration',
    order: -1,
  },
  {
    bucket: ProjectBucket.NotScheduled,
    id: '8',
    name: 'Bring Insights In-House',
    order: -1,
  },
];
