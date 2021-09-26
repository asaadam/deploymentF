import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../component/counter";

test("counter should be rendered correctly", () => {
  render(<Counter />);
  const message = screen.getByText(/current count:/i);
  expect(message).toBeInTheDocument();
  const decrement = screen.getByRole("button", {
    name: /decrement/i,
  });
  expect(decrement).toBeInTheDocument();
  const increment = screen.getByRole("button", {
    name: /increment/i,
  });
  expect(increment).toBeInTheDocument();
});

test("button increment, increment correctly", () => {
  render(<Counter />);
  const message = screen.getByText(/current count:/i);
  const increment = screen.getByRole("button", {
    name: /increment/i,
  });
  userEvent.click(increment);
  expect(message).toHaveTextContent("Current Count: 1");
});

test("button decrement, decrement correctly", () => {
  render(<Counter />);
  const message = screen.getByText(/current count:/i);
  const decrement = screen.getByRole("button", {
    name: /decrement/i,
  });
  userEvent.click(decrement);
  expect(message).toHaveTextContent("Current Count: -1");
});
