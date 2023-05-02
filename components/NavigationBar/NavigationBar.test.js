import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/router";
import NavigationBar from ".";

jest.mock("next/router", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

describe("NavigationBar", () => {
  test("renders the correct links", () => {
    const { getByText } = render(<NavigationBar />);
    expect(getByText("Chill").getAttribute("href")).toBe("/");
    expect(getByText("+").getAttribute("href")).toBe("/new-trip");
    expect(getByText("My trips").getAttribute("href")).toBe("/trips");
  });

  test("navigates to Chill page", async () => {
    const user = userEvent.setup();
    render(<NavigationBar />);
    const chillLink = screen.getByText("Chill");
    await user.click(chillLink);
    expect(window.location.pathname).toBe("/");
  });

  test("navigates to new trip page", () => {
    const routerPush = jest.fn();
    useRouter.mockReturnValue({ push: routerPush });

    render(<NavigationBar />);
    const newTripLink = screen.getByText("+");
    fireEvent.click(newTripLink);

    expect(routerPush).toHaveBeenCalledWith("/new-trip");
  });

  test("navigates to My trips page", async () => {
    const user = userEvent.setup();
    render(<NavigationBar />);
    const myTripsLink = screen.getByText("My trips");
    await user.click(myTripsLink);
    expect(window.location.pathname).toBe("/trips");
  });
});
