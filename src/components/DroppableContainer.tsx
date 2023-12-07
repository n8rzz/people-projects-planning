import { DraggableItem } from './DraggableItem';
import { IProject } from '../domain/project.types';
import { useDrop } from 'react-dnd';
import { DndItemType } from './dnd.types';
import clsx from 'clsx';

interface IProps {
  items: IProject[];
  title: string;
}

export function DroppableContainer(props: IProps) {
  const [{ isOver }, drop] = useDrop(() => ({
    // The type (or types) to accept - strings or symbols
    accept: DndItemType.Project,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={clsx({
        section: true,
        ['mix-section_isHovered']: isOver,
      })}
    >
      <h2>{props.title}</h2>

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
