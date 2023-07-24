import React, { FC } from 'react';
import './TextDisplay.scss';

interface TextDisplayProps {
  title: string;
  textContent: string;
}

const TextDisplay: FC<TextDisplayProps> = ({ title, textContent }) => {
  return (
    <div className="text-display-container">
      <h4>{title}</h4>
      <p>{textContent}</p>
    </div>
  );
};

export default TextDisplay;
