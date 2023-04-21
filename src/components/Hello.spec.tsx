import React from 'react';
import { render, screen } from '@testing-library/react';
import { Hello } from './Hello';

it('Render hello world component', () => {
  render(<Hello />);
  const myContent = screen.getByText('Hello World');
  expect(myContent).toBeInTheDocument();
});
