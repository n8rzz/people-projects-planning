import { useDrag } from "react-dnd";
import { IProject } from "../domain/project.types";
import { DndItemType } from "./dnd.types";

interface IProps {
  item: IProject;
}

export function DraggableItem(props: IProps) {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: DndItemType.Project,
    // The collect function utilizes a "monitor" instance (see the Overview for what this is)
    // to pull important pieces of state from the DnD system.
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
      <div role="Handle" ref={drag}>
        {props.item.name}
      </div>
    </li>
  );
}
