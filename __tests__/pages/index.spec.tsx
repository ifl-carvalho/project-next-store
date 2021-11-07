import React from 'react'
import { render } from 'test-utils'

import IndexPage from '../../src/pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    const { container } = render(<IndexPage categories={[]} products={[]} />)

    expect(container).toBeInTheDocument()
  })
})
