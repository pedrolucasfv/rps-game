import { render, screen } from '@testing-library/react'

import Score from '.'

describe('<Score />', () => {
  it('should render the heading', () => {
    const { container } = render(<Score />)

    expect(screen.getByRole('heading', { name: /Score/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
