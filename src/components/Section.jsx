import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { selectSong } from '../redux/actions'

// eslint-disable-next-line react/prop-types
const Section = ({ artist, playlist }) => {
  const [tracks, setTracks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()

  const fillMusicSection = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/deezer/search?q=' + artist
      )
      if (response.ok) {
        const { data } = await response.json()
        for (let i = 0; i < 4; i++) {
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

  useEffect(() => {
    console.log(tracks)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading])

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
              tracks.map((el) => (
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
            )}
          </Row>
        </div>
      </Col>
    </Row>
  )
}

export default Section
