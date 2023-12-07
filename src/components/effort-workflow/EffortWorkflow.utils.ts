import { IProject } from '../../domain/projects/project.types';
import { Edge, Node } from 'reactflow';

export function buildInitialNodes(buckets: IProject[][]): Node[] {
  return buckets.map((bucket, index) => {
    const firstBucketItem = bucket[0];

    return {
      id: firstBucketItem.id,
      type: 'basicNode',
      position: {
        x: 200 * index,
        y: 0,
      },
      data: {
        ...firstBucketItem,
      },
    };
  });
}

export function buildInitialEdges(buckets: IProject[][]): Edge[] {
  return buckets.reduce((edges: Edge[], bucket, index) => {
    if (index === 0) {
      return edges;
    }

    const firstBucketItem = bucket[0];
    const previousBucketItem = buckets[index - 1][0];

    return [
      ...edges,
      {
        id: `${previousBucketItem.id}-${firstBucketItem.id}`,
        source: previousBucketItem.id,
        target: firstBucketItem.id,
      },
    ];
  }, []);
}
