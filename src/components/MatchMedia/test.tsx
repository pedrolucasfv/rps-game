import { render, screen } from '@testing-library/react'

import MatchMedia from '.'

describe('<MatchMedia />', () => {
  it('should render the heading', () => {
    const { container } = render(<MatchMedia />)

    expect(screen.getByRole('heading', { name: /MatchMedia/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
