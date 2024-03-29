import Col from 'react-bootstrap/Col'
import Section from './Section'
import MainLinks from './MainLinks'

const Home = () => (
  <Col xs={12} md={9} className="offset-md-3 mainPage mb-5 pb-5">
    <MainLinks />
    <Section artist={'queen'} playlist={'Rock Classics'} length={4} />
    <Section artist={'katy perry'} playlist={'Pop Culture'} length={4} />
    <Section artist={'eminem'} playlist={'HipHop'} length={4} />
    <Section
      artist={'claudio baglioni'}
      playlist={'Italian Classics'}
      length={4}
    />
  </Col>
)

export default Home
