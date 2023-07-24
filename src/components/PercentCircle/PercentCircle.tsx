import React from 'react';

interface PercentCircleProps {
  title: string;
  percentage: number;
  size: number;
  strokeWidth: number;
  titleColor: string;
  circleColor: string;
  textColor: string;
  emptyColor: string;
  minSize: number;
}

const PercentCircle: React.FC<PercentCircleProps> = ({
  title,
  percentage,
  size,
  strokeWidth,
  titleColor,
  circleColor,
  textColor,
  emptyColor,
  minSize,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const svgSize = Math.max(size, minSize);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${svgSize} ${svgSize}`}>
      {/* Empty Stroke */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        stroke={emptyColor}
        strokeWidth={strokeWidth}
      />

      {/* Filled Stroke */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        stroke={circleColor}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
      />

      {/* Title */}
      {title && (
        <text
          x="50%"
          y="30%"
          textAnchor="middle"
          fill={titleColor}
          fontSize={size / 14}
        >
          {title}
        </text>
      )}

      {/* Percentage */}
      <text
        x="50%"
        y="60%"
        textAnchor="middle"
        fill={textColor}
        fontSize={size / 4}
        fontWeight="bold"
      >
        {percentage}%
      </text>
    </svg>
  );
};

PercentCircle.defaultProps = {
  minSize: 50,
};

export default PercentCircle;
