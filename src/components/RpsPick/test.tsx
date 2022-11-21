import { render, screen } from '@testing-library/react'

import RpsPick from '.'

describe('<RpsPick />', () => {
  it('should render the heading', () => {
    const { container } = render(<RpsPick />)

    expect(screen.getByRole('heading', { name: /RpsPick/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
