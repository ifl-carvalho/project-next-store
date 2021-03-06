import renderer from 'react-test-renderer'
import Footer from '../components/footer'

describe('Footer Component', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<Footer />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
