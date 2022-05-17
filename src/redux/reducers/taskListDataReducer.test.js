import { generateRandomTasks } from "../../mocks/tasksFactory";
import taskListDataReducer from "./taskListDataReducer";

describe("Given a taskListDataReducer reducer", () => {
  describe("When it receives an action with type loadTasks and a list of tasks", () => {
    test("Then it should return the list of tasks in the in the action", () => {
      const taskList = generateRandomTasks(5);
      const initialTasks = [];

      const action = {
        type: "load-tasks",
        taskList,
      };

      const newTasks = taskListDataReducer(initialTasks, action);

      expect(newTasks).toEqual(taskList);
    });
  });

  describe("When it receives an action with type isCompletedAction and a task", () => {
    test("Then it should return the list of tasks in the in the action", () => {
      const taskList = generateRandomTasks(5);
      const task = {
        name: "Wash the dishes",
        isCompleted: false,
        date: "September 14, 2016",
        username: "Leo Messi",
        id: 1,
      };
      taskList.push(task);
      const updatedTask = {
        name: "Wash the dishes",
        isCompleted: true,
        date: "September 14, 2016",
        username: "Leo Messi",
        id: 1,
      };

      const action = {
        type: "is-completed",
        task,
      };

      const newTasks = taskListDataReducer(taskList, action);

      expect(newTasks).toContainEqual(updatedTask);
    });
  });
});
