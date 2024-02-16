import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useDispatch, useSelector } from 'react-redux'
import { selectSong } from '../redux/actions'

const LikedSongs = () => {
  const dispatch = useDispatch()
  const liked = useSelector((state) => state.songs.liked)
  return (
    <Row>
      <Col xs={10}>
        <div className="section-title">
          <h2>Liked Songs</h2>
          <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3">
            {liked.length > 0 ? (
              liked.map((el) => (
                <Col className="text-center" key={el.id}>
                  <img
                    className="img-fluid pointer"
                    src={el.album.cover_xl}
                    alt="track"
                    onClick={() => dispatch(selectSong(el))}
                  />
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
