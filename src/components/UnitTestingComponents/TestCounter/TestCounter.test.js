import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./index";

describe("Counter Tests", () => {
  let increaseButton, decreaseButton, count;

  beforeEach(() => {
    console.log("I am giong to work before every test case.");
    render(<Counter />); // Forbidden usage, it is recommended to render related components in each test case.
    increaseButton = screen.getByText("Increase");
    decreaseButton = screen.getByText("Decrease");
    count = screen.getByText("0");
  });

  beforeAll(() => {
    console.log("I am giong to work first once.");
  });

  afterAll(() => {
    console.log("I am giong to work last once.");
  });

  afterEach(() => {
    console.log("I am giong to work after every test case.");
  });

  test("increase btn", () => {
    userEvent.click(increaseButton);
    expect(count).toHaveTextContent("1");
  });

  test("decrease btn", () => {
    userEvent.click(decreaseButton);
    expect(count).toHaveTextContent("-1");
  });
});
