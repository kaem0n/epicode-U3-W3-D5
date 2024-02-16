import Col from 'react-bootstrap/Col'
import MainLinks from './MainLinks'
import LikedSongs from './LikedSongs'

const YourLibrary = () => {
  return (
    <Col xs={12} md={9} className="offset-md-3 mainPage mb-5 pb-5">
      <MainLinks />
      <LikedSongs />
    </Col>
  )
}

export default YourLibrary
