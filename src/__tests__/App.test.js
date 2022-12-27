import { screen } from '@testing-library/react';
import { render } from '../setupTests';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  expect(screen.getByText('React Jenkins Docker')).toBeInTheDocument();
});
