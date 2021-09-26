import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "../component/form";

test("Submit form correctly", () => {
  let submitedData;
  const onSubmit = (value) => (submitedData = value);
  render(<Form onSubmit={onSubmit} />);

  const username = "jokowi";
  const password = "testPassword";

  userEvent.type(
    screen.getByRole("textbox", {
      name: /username/i,
    }),
    username
  );
  userEvent.type(screen.getByLabelText(/password/i), password);
  userEvent.click(
    screen.getByRole("button", {
      name: /submit/i,
    })
  );
  expect(submitedData).toEqual({ username, password });
});
