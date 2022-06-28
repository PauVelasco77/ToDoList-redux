import actionsTypes from "../actions/actionsTypes";

const taskListDataReducer = (tasks = [], action = {}) => {
  let newTasksList;

  switch (action.type) {
    case actionsTypes.loadTasks:
      newTasksList = [...action.taskList];
      break;
    case actionsTypes.isCompleted:
      const task = tasks.find((task) => task.id === action.task.id);
      task.isCompleted = !task.isCompleted;
      newTasksList = [...tasks];
      break;
    case actionsTypes.newTask:
      newTasksList = [...tasks, action.task];
      break;
    case actionsTypes.deleteTask:
      newTasksList = tasks.filter((task) => task.id !== action.task.id);
      break;
    case actionsTypes.reorderTasks:
      newTasksList = [...tasks];
      const [removed] = newTasksList.splice(action.startIndex, 1);
      newTasksList.splice(action.endIndex, 0, removed);
      break;
    default:
      newTasksList = [...tasks];
      break;
  }
  return newTasksList;
};

export default taskListDataReducer;
