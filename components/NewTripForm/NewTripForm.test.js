import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewTripForm from "./index";

test("renders the form with required fields", () => {
  render(<NewTripForm onSubmit={() => {}} />);
  expect(screen.getByLabelText("Town")).toBeInTheDocument();
  expect(screen.getByLabelText("Start date")).toBeInTheDocument();
  expect(screen.getByLabelText("End date")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Add" })).toBeInTheDocument();
});

test("prevents the user from submitting the form if required fields are missing", () => {
  const handleSubmit = jest.fn();
  render(<NewTripForm onSubmit={handleSubmit} />);
  const addButton = screen.getByRole("button", { name: "Add" });
  fireEvent.click(addButton);
  expect(handleSubmit).not.toHaveBeenCalled();
});

test("prevents the user from submitting the form if the end date is before the start date", () => {
  const handleSubmit = jest.fn();
  render(<NewTripForm onSubmit={handleSubmit} />);
  const startDateInput = screen.getByLabelText("Start date");
  const endDateInput = screen.getByLabelText("End date");
  userEvent.type(startDateInput, "2023-05-03");
  userEvent.type(endDateInput, "2023-05-01");
  const addButton = screen.getByRole("button", { name: "Add" });
  fireEvent.click(addButton);
  expect(handleSubmit).not.toHaveBeenCalled();
});
