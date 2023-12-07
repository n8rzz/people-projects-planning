import { DraggableItem } from '../draggable-item/DraggableItem';
import { IProject } from '../../domain/projects/project.types';
import { useDrop } from 'react-dnd';
import { DndItemType } from '../shared/dnd.types';
import clsx from 'clsx';
import { ProjectBucket, projectBucketLabels } from '../../domain/projects/project.constants';

interface IProps {
  collection: ProjectBucket;
  items: IProject[];
  onDrop: (project: IProject, destination: ProjectBucket) => void;
}

export function DroppableContainer(props: IProps) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: DndItemType.Project,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    drop: (project: IProject) => props.onDrop(project, props.collection),
  }));

  const title = projectBucketLabels[props.collection];

  return (
    <div
      ref={drop}
      className={clsx({
        section: true,
        ['mix-section_isHovered']: isOver,
      })}
    >
      <h2>{title}</h2>

      <ul>
        {props.items.map((item) => (
          <DraggableItem
            key={`${item.id}-${item.name}`}
            item={item}
          />
        ))}
      </ul>
    </div>
  );
}
