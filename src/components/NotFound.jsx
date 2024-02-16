import Col from 'react-bootstrap/Col'
import MainLinks from './MainLinks'

const NotFound = () => (
  <Col xs={12} md={9} className="offset-md-3 mainPage">
    <MainLinks />
    <h1 className="text-center fw-bold text-white mt-5 pt-5">
      404 - Page not found
    </h1>
  </Col>
)

export default NotFound
