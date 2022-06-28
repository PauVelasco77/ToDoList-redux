import React from "react";
import { render, screen } from "@testing-library/react";
import Task from "./Task";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store/index";
import {
  mockGetComputedStyle,
  mockDndSpacing,
  makeDnd,
  DND_DIRECTION_UP,
  DND_DIRECTION_DOWN,
  DND_DRAGGABLE_DATA_ATTR,
} from "react-beautiful-dnd-test-utils";
const task = {
  name: "Wash the dishes",
  isCompleted: false,
  date: "September 14, 2016",
  username: "Leo Messi",
  id: 1,
};

const mockDispatch = jest.fn();

// jest.mock("react-beautiful-dnd", () => ({
//   Droppable: ({ children }) =>
//     children(
//       {
//         draggableProps: {
//           style: {},
//         },
//         innerRef: jest.fn(),
//       },
//       {}
//     ),
//   Draggable: ({ children }) =>
//     children(
//       {
//         draggableProps: {
//           style: {},
//         },
//         innerRef: jest.fn(),
//       },
//       {}
//     ),
//   DragDropContext: ({ children }) => children,
// }));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a Task component", () => {
  beforeEach(() => {
    mockGetComputedStyle();
  });
  describe("When it's rendered with a Task", () => {
    test.only("Then it should show the name, the date and the name's first letter", () => {
      const expectedName = task.name;
      const expectedDate = task.date;
      const expectedFirstLetter = task.username[0];

      const renderapp = ()=>{
        const { container } = render(
        <Provider store={store}>
          <Task task={task} />
        </Provider>
      mockDndSpacing(container)
      );}

      const findName = screen.getByText(expectedName);
      const findDate = screen.getByText(expectedDate);
      const findFirstLetter = screen.getByText(expectedFirstLetter);

      expect(findName).toBeInTheDocument();
      expect(findDate).toBeInTheDocument();
      expect(findFirstLetter).toBeInTheDocument();
    });
  });

  describe("When it's rendered with a Task with isCompleted=true", () => {
    test("Then it should cross out the name", () => {
      const expectedName = task.name;
      task.isCompleted = true;

      render(<Task task={task} />);

      const findName = screen.getByText(expectedName);

      expect(findName).toHaveStyle("text-decoration: line-through");
    });
  });

  describe("When the user click on the toggle button", () => {
    test("Then it should call the dispatch", () => {
      render(<Task task={task} />);

      const findToggleButton = screen.getByRole("checkbox", {
        name: "controlled",
      });
      userEvent.click(findToggleButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("When the user click on the trash icon", () => {
    test("Then it should call the dispatch", () => {
      render(<Task task={task} />);

      const findTrash = screen.getByTestId("DeleteForeverIcon");
      userEvent.click(findTrash);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
