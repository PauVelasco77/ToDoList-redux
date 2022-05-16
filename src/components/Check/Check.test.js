import { render, screen } from "@testing-library/react";
import Check from "./Check";

describe("Given a Check component", () => {
  describe("When it's rendered with isCheck=false", () => {
    test("Then it should have red color", () => {
      const expectedColor = "#d32f2f";

      render(<Check isCheck={false} />);

      const findCheck = screen.getAllByTestId("CheckBoxIcon")[0];

      expect(findCheck).toHaveStyle(`color: ${expectedColor}`);
    });
  });

  describe("When it's rendered with isCheck=true", () => {
    test("Then it should have red color", () => {
      const expectedColor = "#2e7d32";

      render(<Check isCheck={true} />);

      const findCheck = screen.getAllByTestId("CheckBoxIcon")[0];

      expect(findCheck).toHaveStyle(`color: ${expectedColor}`);
    });
  });
});
