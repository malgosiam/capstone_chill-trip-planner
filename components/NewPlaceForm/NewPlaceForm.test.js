import { render, fireEvent } from "@testing-library/react";
import NewPlaceForm from ".";

describe("NewPlaceForm", () => {
  const onSubmit = jest.fn();
  const tripId = "trip123";

  test("renders the component with the correct elements and props", () => {
    const { getByLabelText, getByText, getByTestId } = render(
      <NewPlaceForm onSubmit={onSubmit} tripId={tripId} />
    );

    expect(getByLabelText("Place name")).toBeInTheDocument();
    expect(getByLabelText("Place is")).toBeInTheDocument();
    expect(getByLabelText("Maps URL")).toBeInTheDocument();
    expect(getByLabelText("Description")).toBeInTheDocument();

    expect(getByText("Add")).toBeInTheDocument();

    const backButton = getByText("Back");
    expect(backButton).toBeInTheDocument();
    expect(backButton).toHaveAttribute("href", `/trips/${tripId}/places`);

    const tripIdInput = getByTestId("tripId-input");
    expect(tripIdInput).toBeInTheDocument();
    expect(tripIdInput).toHaveValue(tripId);
  });

  test("updates the state when input values change", () => {
    const { getByLabelText } = render(
      <NewPlaceForm onSubmit={onSubmit} tripId={tripId} />
    );

    const nameInput = getByLabelText("Place name");
    fireEvent.change(nameInput, { target: { value: "My Place" } });
    expect(nameInput).toHaveValue("My Place");

    const ratingSelect = getByLabelText("Place is");
    fireEvent.change(ratingSelect, { target: { value: "chill" } });
    expect(ratingSelect).toHaveValue("chill");

    const mapsUrlInput = getByLabelText("Maps URL");
    fireEvent.change(mapsUrlInput, {
      target: { value: "https://example.com/maps" },
    });
    expect(mapsUrlInput).toHaveValue("https://example.com/maps");

    /*const descriptionTextarea = getByLabelText("Description");
    fireEvent.change(descriptionTextarea, {
      target: { value: "My Place is awesome!" },
    });
    expect(descriptionTextarea).toHaveValue("My Place is awesome!");*/
  });

  test("calls the onSubmit function when the form is submitted", () => {
    const { getByText } = render(
      <NewPlaceForm onSubmit={onSubmit} tripId={tripId} />
    );

    const submitButton = getByText("Add");
    fireEvent.click(submitButton);
    expect(onSubmit).toHaveBeenCalled();
  });
});
