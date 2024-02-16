import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { likeSong, selectSong, unlikeSong } from '../redux/actions'

// eslint-disable-next-line react/prop-types
const Section = ({ artist, playlist, length }) => {
  const dispatch = useDispatch()
  const likedSongs = useSelector((state) => state.songs.liked)
  const [tracks, setTracks] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fillMusicSection = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/deezer/search?q=' + artist
      )
      if (response.ok) {
        const { data } = await response.json()
        for (let i = 0; i < length; i++) {
          setTracks((current) => [...current, data[i]])
        }
      } else {
        throw new Error('Error in fetching songs')
      }
    } catch (err) {
      console.log('error', err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fillMusicSection()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Row>
      <Col xs={10}>
        <div className="section-title">
          <h2>{playlist}</h2>
          <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3">
            {isLoading ? (
              <div className="flex-grow-1 text-center pb-5 my-5">
                <Spinner animation="border" variant="success" />
              </div>
            ) : (
              tracks.length > 0 &&
              tracks.map((el) => (
                <Col className="text-center" key={el.id}>
                  <div className="position-relative cardContainer">
                    <img
                      className="img-fluid pointer w-100"
                      src={el.album.cover_xl}
                      alt="track"
                      onClick={() => dispatch(selectSong(el))}
                    />
                    <Button
                      variant={likedSongs.includes(el) ? 'danger' : 'success'}
                      className="position-absolute rounded-circle deleteBtn"
                      onClick={() =>
                        likedSongs.includes(el)
                          ? dispatch(unlikeSong(el.id))
                          : dispatch(likeSong(el))
                      }
                    >
                      {likedSongs.includes(el) ? (
                        <i className="bi bi-trash3-fill"></i>
                      ) : (
                        <i className="bi bi-heart-fill"></i>
                      )}
                    </Button>
                  </div>
                  <p>
                    Track: {'"' + el.title + '"'}
                    <br />
                    Artist: {el.artist.name}
                  </p>
                </Col>
              ))
            )}
          </Row>
        </div>
      </Col>
    </Row>
  )
}

export default Section
