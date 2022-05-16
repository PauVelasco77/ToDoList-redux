import actionsTypes from "./actionsTypes";

export const isCompletedAction = (task) => ({
  type: actionsTypes.isCompleted,
  task,
});
