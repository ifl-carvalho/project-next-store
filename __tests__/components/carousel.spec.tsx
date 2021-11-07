import { screen, render } from '@testing-library/react'

import { MainDisplay } from '../../src/components/carousel'

describe('Carousel', () => {
  beforeAll(() => {
    render(<MainDisplay />)
  })

  it('renders correctly', () => {
    expect(screen.getByTestId('test')).toBeInTheDocument()
  })
})
