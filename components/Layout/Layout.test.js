import { render, screen } from "@testing-library/react";
import Layout from ".";

test("renders Layout with children and NavigationBar", () => {
  render(
    <Layout>
      <h1>Test Layout</h1>
    </Layout>
  );

  const headerElement = screen.getByRole("heading", {
    level: 1,
    name: "Test Layout",
  });
  expect(headerElement).toBeInTheDocument();

  const navigationBarElement = screen.getByRole("navigation");
  expect(navigationBarElement).toBeInTheDocument();
});
