import { render, screen } from "@testing-library/react";
import Task from "./Task";
import userEvent from "@testing-library/user-event";

const task = {
  name: "Wash the dishes",
  isCompleted: false,
  date: "September 14, 2016",
  username: "Leo Messi",
  id: 1,
};

describe("Given a Task component", () => {
  describe("When it's rendered with a Task", () => {
    test("Then it should show the name, the date and the name's first letter", () => {
      const expectedName = task.name;
      const expectedDate = task.date;
      const expectedFirstLetter = task.username[0];

      render(<Task task={task} />);

      const findName = screen.getByText(expectedName);
      const findDate = screen.getByText(expectedDate);
      const findFirstLetter = screen.getByText(expectedFirstLetter);

      expect(findName).toBeInTheDocument();
      expect(findDate).toBeInTheDocument();
      expect(findFirstLetter).toBeInTheDocument();
    });
  });

  describe("When it's rendered with a Task and the user click on the toggle button", () => {
    test("Then it should cross out the name", () => {
      const expectedName = task.name;

      render(<Task task={task} />);

      const findToggleButton = screen.getByRole("checkbox", {
        name: "controlled",
      });
      userEvent.click(findToggleButton);
      const findName = screen.getByText(expectedName);

      expect(findName).toHaveStyle("text-decoration: line-through");
    });
  });
});
