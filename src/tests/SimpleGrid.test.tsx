import React from "react";
import { render, screen } from "@testing-library/react";
import SimpleGrid from "../components/SimpleGrid/SimpleGrid";

const sampleData = [
  { title: "Title 1", content: "Content 1" },
  { title: "Title 2", content: "Content 2" },
  { title: "Title 3", content: "Content 3" },
];

it("renders correct number of cells", () => {
  render(<SimpleGrid data={sampleData} />);
  const cells = screen.getAllByTestId(/^grid-cell-/);
  expect(cells).toHaveLength(sampleData.length);
});

it("renders cell titles and content correctly", () => {
  const { getByText } = render(<SimpleGrid data={sampleData} />);

  sampleData.forEach(({ title, content }) => {
    const titleElement = getByText(title);
    const contentElement = getByText(content);
    expect(titleElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });
});
