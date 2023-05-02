import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ConfirmDialogBox from ".";

describe("ConfirmDialogBox", () => {
  test("renders the component", () => {
    render(<ConfirmDialogBox />);
    const dialogBox = screen.getByRole("dialog");
    expect(dialogBox).toBeInTheDocument();
  });

  test("displays the confirmation message", () => {
    render(<ConfirmDialogBox />);
    const message = screen.getByText(
      /Are you sure you want to delete this trip?/i
    );
    expect(message).toBeInTheDocument();
  });

  test('calls the onConfirm callback when "Delete" is clicked', () => {
    const onConfirm = jest.fn();
    render(<ConfirmDialogBox onConfirm={onConfirm} />);
    const deleteButton = screen.getByLabelText(/Delete/i);
    fireEvent.click(deleteButton);
    expect(onConfirm).toHaveBeenCalled();
  });

  test("calls onConfirm and closes the dialog box when the Delete button is clicked", async () => {
    const onConfirm = jest.fn();
    const onCancel = jest.fn();
    render(<ConfirmDialogBox onConfirm={onConfirm} onCancel={onCancel} />);
    const deleteButton = screen.getByLabelText(/Delete/i);
    fireEvent.click(deleteButton);
    await waitFor(() => {
      expect(onConfirm).toHaveBeenCalled();
      expect(onCancel).not.toHaveBeenCalled();
      expect(
        screen.queryByText(/Are you sure you want to delete this trip?/i)
      ).not.toBeInTheDocument();
    });
  });

  test("calls onCancel and closes the dialog box when the Cancel button is clicked", async () => {
    const onConfirm = jest.fn();
    const onCancel = jest.fn();
    render(<ConfirmDialogBox onConfirm={onConfirm} onCancel={onCancel} />);
    const cancelButton = screen.getByText(/Cancel/i);
    fireEvent.click(cancelButton);
    await waitFor(() => {
      expect(onConfirm).not.toHaveBeenCalled();
      expect(onCancel).toHaveBeenCalled();
      expect(
        screen.queryByText(/Are you sure you want to delete this trip?/i)
      ).not.toBeInTheDocument();
    });
  });
});
