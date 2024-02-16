import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDispatch, useSelector } from 'react-redux'
import { likeSong, unlikeSong } from '../redux/actions'

const Playerbar = () => {
  const selectedSong = useSelector((state) => state.selected)
  const likedSongs = useSelector((state) => state.liked)
  const dispatch = useDispatch()

  const handleLike = (song) => {
    if (likedSongs.includes(song)) {
      dispatch(unlikeSong(song.id))
    } else {
      dispatch(likeSong(song))
    }
  }

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className="h-100 justify-content-between align-items-center">
            <Col xs={1} sm={2} md={3}></Col>
            <Col xs={6} md={4} className="playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src="assets/playerbuttons/shuffle.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/prev.png" alt="prev" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/play.png" alt="play" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/next.png" alt="next" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/repeat.png" alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
            <Col xs={5} sm={4} md={3}>
              {selectedSong && (
                <Row className="align-items-center">
                  <Col
                    xs={8}
                    md={8}
                    xl={9}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <i
                      className={`text-white mx-1 pointer bi${
                        likedSongs.includes(selectedSong)
                          ? ' bi-heart-fill'
                          : ' bi-heart'
                      }`}
                      onClick={() => handleLike(selectedSong)}
                    ></i>
                    <div>
                      <p className="selectedSongTxt">{selectedSong.title}</p>
                      <p className="selectedSongTxt">
                        {selectedSong.artist.name}
                      </p>
                    </div>
                  </Col>
                  <Col xs={4} md={4} xl={3}>
                    <img
                      src={selectedSong.album.cover_xl}
                      alt={selectedSong.album.id}
                      className="w-100"
                    />
                  </Col>
                </Row>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Playerbar
