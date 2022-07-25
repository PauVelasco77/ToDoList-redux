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

export const deleteTaskAction = (task) => ({
  type: actionsTypes.deleteTask,
  task,
});

export const reorderTasksAction = (startIndex, endIndex) => ({
  type: actionsTypes.reorderTasks,
  startIndex,
  endIndex,
});

export const createTaskAction = (task) => ({
  type: actionsTypes.createTask,
  task,
});
