import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import TaskList from "./TaskList";
import store from "../../redux/store/index";
import taskListData from "../../data/taskListData";

describe("Given a TaskList component", () => {
  describe("When it's rendered with a list of task", () => {
    test("Then it should render all the names of the list", () => {
      render(
        <Provider store={store}>
          <TaskList />
        </Provider>
      );

      const findNames = taskListData.map((task) => screen.getByText(task.name));

      findNames.forEach((name) => expect(name).toBeInTheDocument());
    });
  });
});
