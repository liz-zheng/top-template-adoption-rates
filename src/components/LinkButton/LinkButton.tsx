import React, { MouseEventHandler } from 'react';
import './LinkButton.scss';

interface LinkButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({ onClick, children }) => {
  return (
    <button className="link-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default LinkButton;
