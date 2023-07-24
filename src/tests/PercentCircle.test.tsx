import React from 'react';
import { render } from '@testing-library/react';
import PercentCircle from '../components/PercentCircle/PercentCircle';

describe('PercentCircle', () => {
  const defaultProps = {
    title: 'Test Percent Circle',
    percentage: 50,
    size: 100,
    strokeWidth: 5,
    titleColor: '#000000',
    circleColor: '#00ff00',
    textColor: '#ffffff',
    emptyColor: '#cccccc',
    minSize: 50,
  };

  it('renders without crashing', () => {
    render(<PercentCircle {...defaultProps} />);
  });

  it('displays the title and percentage', () => {
    const { getByText } = render(<PercentCircle {...defaultProps} />);
    const titleElement = getByText('Test Percent Circle');
    expect(titleElement).toBeInTheDocument();
  });

  it('displays the percentage', () => {
    const { getByText } = render(<PercentCircle {...defaultProps} />);
    const percentageElement = getByText('50%');
    expect(percentageElement).toBeInTheDocument();
  });
});
