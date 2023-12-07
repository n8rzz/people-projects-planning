import { ProjectBucket } from './project.constants';

export interface IProject {
  bucket: ProjectBucket;
  id: string;
  name: string;
  order: number;
}
