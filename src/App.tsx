import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DroppableContainer } from './components/droppable-container/DroppableContainer';
import { IProject } from './domain/projects/project.types';
import { ProjectBucket } from './domain/projects/project.constants';
import { Dispatch, SetStateAction, useState } from 'react';
import { projectListMock } from './domain/projects/__mock__/project.mocks';
import { filterItemsByBucket } from './App.utils';
import { EffortWorkflow } from './components/effort-workflow/EffortWorkflow';

function App() {
  const [currentProjects, setCurrentProjects] = useState<IProject[]>(
    filterItemsByBucket(projectListMock, ProjectBucket.Current),
  );
  const [nextProjects, setNextProjects] = useState<IProject[]>(
    filterItemsByBucket(projectListMock, ProjectBucket.Next),
  );
  const [futureProjects, setFutureProjects] = useState<IProject[]>(
    filterItemsByBucket(projectListMock, ProjectBucket.Future),
  );
  const [unScheduledProjects, setNotScheduledProjects] = useState<IProject[]>(
    filterItemsByBucket(projectListMock, ProjectBucket.NotScheduled),
  );

  const dropHandlerFactory: Record<ProjectBucket, Dispatch<SetStateAction<IProject[]>>> = {
    [ProjectBucket.Current]: setCurrentProjects,
    [ProjectBucket.Next]: setNextProjects,
    [ProjectBucket.Future]: setFutureProjects,
    [ProjectBucket.NotScheduled]: setNotScheduledProjects,
  };

  const handleDrop = (project: IProject, destination: ProjectBucket) => {
    if (project.bucket === destination) {
      return;
    }

    const addHandler = dropHandlerFactory[destination];
    const removeHandler = dropHandlerFactory[project.bucket];

    if (!addHandler || !removeHandler) {
      console.warn('Drag and Drop handler undefined');
      return;
    }

    const projectToAdd: IProject = {
      ...project,
      bucket: destination,
    };

    addHandler((prevProjects) => [...prevProjects, projectToAdd]);
    removeHandler((prevProjects) => [
      ...prevProjects.filter((prevProject) => prevProject.id !== project.id),
    ]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="projectBuckets">
        <DroppableContainer
          items={currentProjects}
          collection={ProjectBucket.Current}
          onDrop={handleDrop}
        />
        <DroppableContainer
          items={nextProjects}
          collection={ProjectBucket.Next}
          onDrop={handleDrop}
        />
        <DroppableContainer
          items={futureProjects}
          collection={ProjectBucket.Future}
          onDrop={handleDrop}
        />
        <DroppableContainer
          items={unScheduledProjects}
          collection={ProjectBucket.NotScheduled}
          onDrop={handleDrop}
        />
      </div>
      <EffortWorkflow
        buckets={[currentProjects, nextProjects, futureProjects, unScheduledProjects]}
      />
    </DndProvider>
  );
}

export default App;
