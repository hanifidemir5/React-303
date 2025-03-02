import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestTodo from "./index";

describe("Todo tests", () => {
  let button, input;

  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<TestTodo />);
    button = screen.getByText("Add Item");
    input = screen.getByLabelText("Text");
  });

  test("3 objects must be rendered as default.", () => {
    const items = screen.getAllByText(/Item /i);
    expect(items.length).toEqual(3);
  });

  test("Input and button must be in the document.", () => {
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test("When a string is entered into the input and the button is pressed, it should be added to the list.", () => {
    const name = "Hanifi";
    userEvent.type(input, name);
    userEvent.click(button);
    expect(screen.getByText(name)).toBeInTheDocument();
  });
});
