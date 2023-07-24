import React from "react";
import "./SimpleGrid.scss";

interface CellData {
  title: string;
  content: string;
}

interface SimpleGridProps {
  data: CellData[];
}

const SimpleGrid: React.FC<SimpleGridProps> = ({ data }) => {
  return (
    <div className="simple-grid-container">
      {data.map((cell, index) => (
        <div
          key={index}
          className="grid-cell"
          data-testid={`grid-cell-${index}`}
        >
          <div className="cell-title">{cell.title}</div>
          <div className="cell-content">{cell.content}</div>
        </div>
      ))}
    </div>
  );
};

export default SimpleGrid;
