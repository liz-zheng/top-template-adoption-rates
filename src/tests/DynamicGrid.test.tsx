import React from "react";
import { render } from "@testing-library/react";
import DynamicGrid from "../components/DynamicGrid/DynamicGrid";

interface GridData {
  [key: string]: string;
}

describe("DynamicGrid component", () => {
  const sampleData = [
    {
      Template: "Docker",
      "Adoption Rate": "20%",
      "Total Users": "30",
      "Number Adopted": "10",
    },
    {
      Template: "Fly",
      "Adoption Rate": "50%",
      "Total Users": "40",
      "Number Adopted": "70",
    },
  ];

  it("should render headers when hasHeaders prop is true", () => {
    const { getByText } = render(
      <DynamicGrid data={sampleData} hasHeaders={true} />,
    );

    expect(getByText("Template")).toBeInTheDocument();
    expect(getByText("Adoption Rate")).toBeInTheDocument();
    expect(getByText("Total Users")).toBeInTheDocument();
    expect(getByText("Number Adopted")).toBeInTheDocument();
  });

  it("should not render headers when hasHeaders prop is false", () => {
    const { queryByText } = render(
      <DynamicGrid data={sampleData} hasHeaders={false} />,
    );

    expect(queryByText("Template")).toBeNull();
    expect(queryByText("Adoption Rate")).toBeNull();
    expect(queryByText("Total Users")).toBeNull();
    expect(queryByText("Number Adopted")).toBeNull();
  });

  it("should render data rows", () => {
    const { getByText } = render(
      <DynamicGrid data={sampleData} hasHeaders={true} />,
    );

    expect(getByText("Docker")).toBeInTheDocument();
    expect(getByText("20%")).toBeInTheDocument();
    expect(getByText("30")).toBeInTheDocument();
    expect(getByText("10")).toBeInTheDocument();
    expect(getByText("Fly")).toBeInTheDocument();
    expect(getByText("50%")).toBeInTheDocument();
    expect(getByText("40")).toBeInTheDocument();
    expect(getByText("70")).toBeInTheDocument();
  });
});
