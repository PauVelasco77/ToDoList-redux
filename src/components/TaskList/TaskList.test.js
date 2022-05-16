import { render, screen } from "@testing-library/react";
import taskListData from "../../data/taskListData";
import TaskList from "./TaskList";

describe("Given a TaskList component", () => {
  describe("When it's rendered with a list of task", () => {
    test("Then it should render all the names of the list", () => {
      render(<TaskList list={taskListData} />);

      const findNames = taskListData.map((task) => screen.getByText(task.name));

      findNames.forEach((name) => expect(name).toBeInTheDocument());
    });
  });
});
