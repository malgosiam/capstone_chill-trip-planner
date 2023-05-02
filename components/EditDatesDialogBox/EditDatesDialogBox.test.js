import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import EditDatesDialogBox from ".";

describe("EditDatesDialogBox", () => {
  const onSave = jest.fn();
  const onCancel = jest.fn();
  const startDate = "2023-05-01";
  const endDate = "2023-05-05";

  test("renders the component with initial values", () => {
    render(
      <EditDatesDialogBox
        onSave={onSave}
        onCancel={onCancel}
        startDate={startDate}
        endDate={endDate}
      />
    );

    const startInput = screen.getByLabelText("new Start Date");
    expect(startInput.value).toBe(startDate);

    const endInput = screen.getByLabelText("new End Date");
    expect(endInput.value).toBe(endDate);

    const saveButton = screen.getByText("Save");
    expect(saveButton.disabled).toBe(false);

    const cancelButton = screen.getByText("Cancel");
    expect(cancelButton.disabled).toBe(false);
  });

  test("disables the save button when there's an error message", () => {
    render(
      <EditDatesDialogBox
        onSave={onSave}
        onCancel={onCancel}
        startDate={startDate}
        endDate={endDate}
      />
    );

    const startInput = screen.getByLabelText("new Start Date");
    fireEvent.change(startInput, { target: { value: "2023-05-05" } });

    const endInput = screen.getByLabelText("new End Date");
    fireEvent.change(endInput, { target: { value: "2023-05-01" } });

    const saveButton = screen.getByText("Save");
    expect(saveButton.disabled).toBe(true);
  });

  test("calls the onSave function with the new dates when save button is clicked", () => {
    render(
      <EditDatesDialogBox
        onSave={onSave}
        onCancel={onCancel}
        startDate={startDate}
        endDate={endDate}
      />
    );

    const startInput = screen.getByLabelText("new Start Date");
    fireEvent.change(startInput, { target: { value: "2023-05-03" } });

    const endInput = screen.getByLabelText("new End Date");
    fireEvent.change(endInput, { target: { value: "2023-05-07" } });

    const saveButton = screen.getByText("Save");
    fireEvent.click(saveButton);

    expect(onSave).toHaveBeenCalledWith("2023-05-03", "2023-05-07");
  });

  test("calls the onCancel function when cancel button is clicked", () => {
    render(
      <EditDatesDialogBox
        onSave={onSave}
        onCancel={onCancel}
        startDate={startDate}
        endDate={endDate}
      />
    );

    const cancelButton = screen.getByText("Cancel");
    fireEvent.click(cancelButton);

    expect(onCancel).toHaveBeenCalled();
  });
});
