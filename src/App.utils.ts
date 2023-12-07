import { ProjectBucket } from './domain/projects/project.constants';
import { IProject } from './domain/projects/project.types';

export function filterItemsByBucket(items: IProject[], bucket: ProjectBucket): IProject[] {
  return items.filter((item) => item.bucket === bucket);
}
