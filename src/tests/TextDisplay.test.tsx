import React from "react";
import { render } from "@testing-library/react";
import TextDisplay from "../components/TextDisplay/TextDisplay";

describe("TextDisplay component", () => {
  it("should render the title and textContent correctly", () => {
    const title = "Sample Title";
    const textContent = "Sample Content";

    const { getByText } = render(
      <TextDisplay title={title} textContent={textContent} />,
    );

    const titleElement = getByText(title);
    const textContentElement = getByText(textContent);

    expect(titleElement).toBeInTheDocument();
    expect(textContentElement).toBeInTheDocument();
  });

  it("should render an empty title correctly", () => {
    const title = "";
    const textContent = "Sample content.";

    const { getByText } = render(
      <TextDisplay title={title} textContent={textContent} />,
    );

    const textContentElement = getByText(textContent);

    expect(textContentElement).toBeInTheDocument();
  });

  it("should render an empty textContent correctly", () => {
    const title = "Sample Title";
    const textContent = "";

    const { getByText } = render(
      <TextDisplay title={title} textContent={textContent} />,
    );

    const titleElement = getByText(title);

    expect(titleElement).toBeInTheDocument();
  });
});
