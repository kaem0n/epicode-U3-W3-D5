import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDispatch, useSelector } from 'react-redux'
import { selectSong, unlikeSong } from '../redux/actions'
import { Button } from 'react-bootstrap'

const LikedSongs = () => {
  const dispatch = useDispatch()
  const liked = useSelector((state) => state.liked)

  return (
    <Row>
      <Col xs={10}>
        <div className="section-title">
          <h2>Liked Songs</h2>
          <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3">
            {liked.length > 0 ? (
              liked.map((el) => (
                <Col className="text-center" key={el.id}>
                  <div className="position-relative cardContainer">
                    <img
                      className="w-100 pointer"
                      src={el.album.cover_xl}
                      alt="track"
                      onClick={() => dispatch(selectSong(el))}
                    />
                    <Button
                      variant="danger"
                      className="position-absolute rounded-circle deleteBtn"
                      onClick={() => dispatch(unlikeSong(el.id))}
                    >
                      <i className="bi bi-trash3-fill"></i>
                    </Button>
                  </div>
                  <p>
                    Track: {'"' + el.title + '"'}
                    <br />
                    Artist: {el.artist.name}
                  </p>
                </Col>
              ))
            ) : (
              <h1 className="flex-grow-1 text-center mt-5">
                This section is empty. Hit the like button on your favorite
                songs to fill it!
              </h1>
            )}
          </Row>
        </div>
      </Col>
    </Row>
  )
}

export default LikedSongs
