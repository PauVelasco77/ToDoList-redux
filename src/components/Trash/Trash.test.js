import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Trash from "./Trash";

describe("Given a Trash component", () => {
  describe("When the user clicks on the component", () => {
    test("Then it should call the action", () => {
      const actionOnClick = jest.fn();

      render(<Trash actionOnClick={actionOnClick} />);

      const findTrash = screen.getByTestId("DeleteForeverIcon");
      userEvent.click(findTrash);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
