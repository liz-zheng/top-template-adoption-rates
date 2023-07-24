import React from 'react';
import './DynamicGrid.scss';
interface GridData {
  [key: string]: string;
}

interface DynamicGridProps {
  data: GridData[];
  hasHeaders: boolean;
}

const DynamicGrid: React.FC<DynamicGridProps> = ({
  data,
  hasHeaders = true,
}) => {
  const headings = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div className="dynamic-grid">
      <div className="grid-row header">
        {hasHeaders &&
          headings.map((heading, columnIndex) => (
            <div key={columnIndex} className="grid-heading">
              {heading}
            </div>
          ))}
      </div>

      {data.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {headings.map((heading, columnIndex) => (
            <div key={columnIndex} className="grid-content">
              {row[heading]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DynamicGrid;
