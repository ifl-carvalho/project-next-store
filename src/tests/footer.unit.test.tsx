import renderer from 'react-test-renderer'
import Footer from '../components/Footer'

describe('Footer Component', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<Footer />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
