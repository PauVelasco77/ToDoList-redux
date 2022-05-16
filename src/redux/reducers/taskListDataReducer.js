import actionsTypes from "../actions/actionsTypes";

const taskListDataReducer = (tasks = [], action = {}) => {
  let newTasksList;

  switch (action.type) {
    case actionsTypes.loadTasks:
      newTasksList = [...action.taskList];
      break;

    default:
      newTasksList = [...tasks];
      break;
  }
  return newTasksList;
};

export default taskListDataReducer;
