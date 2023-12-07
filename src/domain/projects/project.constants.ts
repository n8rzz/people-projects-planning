export enum ProjectBucket {
  Current = 'Current',
  Future = 'Future',
  Next = 'Next',
  NotScheduled = 'NotScheduled',
}

export const projectBucketLabels: Record<ProjectBucket, string> = {
  [ProjectBucket.Current]: 'Current',
  [ProjectBucket.Future]: 'Future',
  [ProjectBucket.Next]: 'Next',
  [ProjectBucket.NotScheduled]: 'NotScheduled',
};
