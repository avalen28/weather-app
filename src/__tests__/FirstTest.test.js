import { render, screen } from "@testing-library/react";
import Weather from "../components/Weather.jsx"


test("Example 1 renders successfully", () => {
  render(<Weather />);

  const element = screen.getByText(/this is a test/i);

  expect(element).toBeInTheDocument();
});
