import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DroppableContainer } from './components/DroppableContainer';
import { IProject } from './domain/project.types';
import { ProjectBucket } from './domain/project.constants';

// TODO: replace with something real
const items: IProject[] = [
  {
    bucket: ProjectBucket.NotScheduled,
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
];

function App() {
  const currentProjects: IProject[] = items.filter((item) => item.bucket === ProjectBucket.Current);
  const nextProjects: IProject[] = items.filter((item) => item.bucket === ProjectBucket.Next);
  const futureProjects: IProject[] = items.filter((item) => item.bucket === ProjectBucket.Future);
  const unScheduledProjects: IProject[] = items.filter(
    (item) => item.bucket === ProjectBucket.NotScheduled,
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <DroppableContainer
          items={currentProjects}
          title="CURRENT"
        />
        <DroppableContainer
          items={nextProjects}
          title="NEXT"
        />
        <DroppableContainer
          items={futureProjects}
          title="FUTURE"
        />
        <DroppableContainer
          items={unScheduledProjects}
          title="PROJECT LIST"
        />
      </div>
    </DndProvider>
  );
}

export default App;
