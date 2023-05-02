import { render, screen } from "@testing-library/react";
import TripList from ".";

const trips = [
  { id: 1, startDate: "2022-05-15", townName: "New York" },
  { id: 2, startDate: "2022-06-20", townName: "Paris" },
  { id: 3, startDate: "2022-04-05", townName: "London" },
];

test("renders a list of all trips", () => {
  render(<TripList trips={trips} />);
  const tripLinks = screen.getAllByRole("link");
  expect(tripLinks).toHaveLength(trips.length);
});

test("renders a list of trips sorted by start date", () => {
  render(<TripList trips={trips} />);
  const tripLinks = screen.getAllByRole("link");
  expect(tripLinks[0]).toHaveTextContent("Paris");
  expect(tripLinks[1]).toHaveTextContent("New York");
  expect(tripLinks[2]).toHaveTextContent("London");
});
