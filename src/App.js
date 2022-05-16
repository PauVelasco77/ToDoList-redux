import "./App.css";
import Task from "./components/Task/Task";
import TaskList from "./components/TaskList/TaskList";
import taskListData from "./data/taskListData";

function App() {
  return (
    <div className="App">
      <Task task={taskListData[0]} />
      <TaskList list={taskListData} />
    </div>
  );
}

export default App;
