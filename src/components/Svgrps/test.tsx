import { render, screen } from '@testing-library/react'

import Svgrps from '.'

describe('<Svgrps />', () => {
  it('should render the heading', () => {
    const { container } = render(<Svgrps />)

    expect(screen.getByRole('heading', { name: /Svgrps/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
