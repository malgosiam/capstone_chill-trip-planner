import { render, screen } from "@testing-library/react";
import TripList from ".";

const trips = [
  { id: 1, startDate: "2022-05-15", townName: "New York" },
  { id: 2, startDate: "2022-06-20", townName: "Paris" },
  { id: 3, startDate: "2022-04-05", townName: "London" },
];

test("renders a list of all trips", () => {
  render(<TripList trips={trips} />);
  const tripItems = screen.getAllByRole("listitem");
  expect(tripItems).toHaveLength(trips.length);
});

test("renders a list of trips sorted by start date", () => {
  render(<TripList trips={trips} />);
  const tripItems = screen.getAllByRole("listitem");
  expect(tripItems[0]).toHaveTextContent("Paris");
  expect(tripItems[1]).toHaveTextContent("New York");
  expect(tripItems[2]).toHaveTextContent("London");
});
