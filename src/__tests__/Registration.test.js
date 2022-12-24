import { render, screen } from '@testing-library/react'
import Registration from '../Registration/Registration'

beforeEach(() => render(<Registration />))

test.skip('renders learn react link', () => {
  expect(screen.getByText('Account Registration')).toBeInTheDocument()
  expect(screen.getByText('Fill Out Your Account Details')).toBeInTheDocument()
  expect(
    screen.getByText(
      'You can fill out your account details or create your account with one of the providers below.'
    )
  ).toBeInTheDocument()
})
