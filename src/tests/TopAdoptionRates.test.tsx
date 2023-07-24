import React from 'react';
import { render, screen } from '@testing-library/react';
import TopAdoptionRates from '../TopAdoptionRates';
import '@testing-library/jest-dom';

describe('TopAdoptionRates component', () => {
  it('should render the correct title', () => {
    render(<TopAdoptionRates />);
    const titleElement = screen.getByText('Top Template Adoption Rates');
    expect(titleElement).toBeInTheDocument();
  });

  it('should render the PercentCircle component', async () => {
    render(<TopAdoptionRates />);
    const percentCircleElement = screen.getByTestId('percent-circle');
    expect(percentCircleElement).toBeInTheDocument();
  });

  it('should render the Text Display and Simple Grid component', async () => {
    render(<TopAdoptionRates />);
    const percentCircleElement = screen.getByTestId('top-template-detail');
    expect(percentCircleElement).toBeInTheDocument();
  });

  it('should render the DynamicGrid component', () => {
    render(<TopAdoptionRates />);
    const dynamicGridElement = screen.getByTestId('template-adoption-grid');
    expect(dynamicGridElement).toBeInTheDocument();
  });

  it('should render the "See More" link', () => {
    render(<TopAdoptionRates />);
    const seeMoreLinkElement = screen.getByText('See More');
    expect(seeMoreLinkElement).toBeInTheDocument();
  });
});
