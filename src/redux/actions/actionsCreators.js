import actionsTypes from "./actionsTypes";

export const loadTasksAction = (taskList) => ({
  type: actionsTypes.loadTasks,
  taskList,
});

export const isCompletedAction = (task) => ({
  type: actionsTypes.isCompleted,
  task,
});

export const newTaskAction = (task) => ({
  type: actionsTypes.newTask,
  task,
});
