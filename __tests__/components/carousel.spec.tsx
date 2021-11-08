import { render } from '@testing-library/react'

import { MainDisplay } from '../../src/components/carousel'

describe('Carousel', () => {
  it('renders correctly', () => {
    const { container } = render(<MainDisplay />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
