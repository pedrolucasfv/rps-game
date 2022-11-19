import { render, screen } from '@testing-library/react'

import Rps from '.'

describe('<Rps />', () => {
  it('should render the heading', () => {
    const { container } = render(<Rps />)

    expect(screen.getByRole('heading', { name: /Rps/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
