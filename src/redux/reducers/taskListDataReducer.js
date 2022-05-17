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
    default:
      newTasksList = [...tasks];
      break;
  }
  return newTasksList;
};

export default taskListDataReducer;
