import './DraggableItem.css';
import clsx from 'clsx';
import { useDrag } from 'react-dnd';
import { IProject } from '../../domain/projects/project.types';
import { DndItemType } from '../shared/dnd.types';

interface IProps {
  item: IProject;
}

export function DraggableItem(props: IProps) {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: DndItemType.Project,
    item: { ...props.item },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <li
      ref={dragPreview}
      key={`${props.item.id}-${props.item.name}`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <div
        className={clsx({
          ['projectItem']: true,
        })}
        role="Handle"
        ref={drag}
      >
        {props.item.name}
      </div>
    </li>
  );
}
