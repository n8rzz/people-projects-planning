import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DropableContainer } from "./components/DropableContainer";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <DropableContainer name="CURRENT" />
        <DropableContainer name="NEXT" />
        <DropableContainer name="FUTURE" />
        <DropableContainer name="PROJECT LIST" />
      </div>
    </DndProvider>
  );
}

export default App;
