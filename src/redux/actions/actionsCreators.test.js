import {
  generateRandomTask,
  generateRandomTasks,
} from "../../mocks/tasksFactory";
import { isCompletedAction, loadTasksAction } from "./actionsCreators";

describe("Given a loadTasks action", () => {
  describe("When it receives a list of tasks", () => {
    test("Then it should return an action with type load-tasks and a list of tasks", () => {
      const taskList = generateRandomTasks(5);

      const expectedAction = {
        type: "load-tasks",
        taskList,
      };

      const action = loadTasksAction(taskList);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given a isCompleted action", () => {
  describe("When it receives a task", () => {
    test("Then it should return an action with type is-completed and a task", () => {
      const task = generateRandomTask();

      const expectedAction = {
        type: "is-completed",
        task,
      };

      const action = isCompletedAction(task);

      expect(action).toEqual(expectedAction);
    });
  });
});
