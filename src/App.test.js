import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AANDH foundation brand', () => {
  render(<App />);
  const brand = screen.getAllByText(/AANDH/i)[0];
  expect(brand).toBeInTheDocument();
});
