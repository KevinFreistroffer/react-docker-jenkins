import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyComponent from '../MyComponent';

test('renders learn react link', () => {
  render(<MyComponent />);
  expect(screen.getByText('MyComponent functional component')).toBeInTheDocument();

  const textButton = screen.getByRole('button', { name: 'Can\'t click me'});
  const togglerButton = screen.getByRole('button', { name: 'Toggler'})

  expect(textButton).toBeDisabled();
  userEvent.click(togglerButton);
  expect(textButton).not.toBeDisabled();
});
