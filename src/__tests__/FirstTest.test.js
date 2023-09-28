import { render, screen } from "@testing-library/react";
import FirstTest from "../components/examples/FirstTest";
import TestWithMockData from "../components/examples/TestWithMockData.jsx";



test("Example 1 renders successfully", () => {
  render(<FirstTest />);

  const element = screen.getByText(/First test/i);

  expect(element).toBeInTheDocument();
});


test("Ordered list renders", () => {
   const mockData = [
     {
       id: 1,
       first_name: "Fletcher",
       last_name: "McVanamy",
       email: "mmcvanamy0@e-recht24.de",
       age: 30,
     },
     {
       id: 2,
       first_name: "Clarice",
       last_name: "Harrild",
       email: "charrild1@dion.ne.jp",
       age: 35,
     },
     {
    "id": 3,
    "first_name": "Amby",
    "last_name": "Emmer",
    "email": "aemmer2@buzzfeed.com",
    "age": 67
}
   ];
  render(<TestWithMockData data={mockData} displayUnorderedList={false} />);

  expect(screen.getByText(/McVanamy/i)).toBeInTheDocument();
});
