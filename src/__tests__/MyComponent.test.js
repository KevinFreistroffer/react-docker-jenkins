import { render, screen } from '@testing-library/react';
import MyComponent from '../MyComponent';

test('renders learn react link', () => {
  render(<MyComponent />);
  expect(screen.getByText('MyComponent functional component')).toBeInTheDocument();
});
