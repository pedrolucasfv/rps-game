import { render, screen } from '@testing-library/react'

import Result from '.'

describe('<Result />', () => {
  it('should render the heading', () => {
    const { container } = render(<Result />)

    expect(screen.getByRole('heading', { name: /Result/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
