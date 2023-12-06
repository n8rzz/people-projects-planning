import { IProject } from "../domain/project.types";
import { DraggableItem } from "./DraggableItem";

// TODO: replace with something real
const items: IProject[] = [
  { id: "1", name: "Messaging" },
  { id: "2", name: "Path to Value" },
  { id: "3", name: "Financials Part 3" },
];

interface IProps {
  name: string;
}

export function DropableContainer(props: IProps) {
  return (
    <div className="section">
      <h2>{props.name}</h2>

      <ul>
        {items.map((item) => (
          <DraggableItem key={`${item.id}-${item.name}`} item={item} />
        ))}
      </ul>
    </div>
  );
}
