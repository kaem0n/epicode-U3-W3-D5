import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'
import MainLinks from './MainLinks'
import Section from './Section'
import { useDispatch, useSelector } from 'react-redux'
import { selectSong } from '../redux/actions'

const SearchPage = () => {
  const dispatch = useDispatch()
  const searchResults = useSelector((state) => state.songs.search.list)
  const searchQuery = useSelector((state) => state.songs.search.query)
  const searchLoading = useSelector((state) => state.songs.search.isLoading)
  const defaultQuery = queries[Math.floor(Math.random() * queries.length)]

  return (
    <Col xs={12} md={9} className="offset-md-3 mainPage mb-5 pb-5">
      <MainLinks />
      <Row>
        {searchLoading ? (
          <Col xs={11} className="text-center py-5 my-5">
            <Spinner animation="border" variant="success" />
          </Col>
        ) : searchResults.length > 0 ? (
          <Col xs={10}>
            <div className="section-title">
              <h2>Results for: {searchQuery}</h2>
              <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3">
                {searchResults.map((el) => (
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
                ))}
              </Row>
            </div>
          </Col>
        ) : (
          <>
            <Section
              artist={defaultQuery}
              playlist={`Popular artists of the week: ${defaultQuery.toUpperCase()}`}
              length={24}
            />
          </>
        )}
      </Row>
    </Col>
  )
}

export default SearchPage

// Array of random artists for default search page.
const queries = [
  'Metallica',
  'Eminem',
  'Queen',
  'Katy Perry',
  'Lady Gaga',
  'Madonna',
  'Rihanna',
  'Taylor Swift',
  'Ariana Grande',
  'Linkin Park',
  'Slipknot',
  'Michael Jackson',
  'Pink Floyd',
  'Britney Spears',
  'Billie Eilish',
]
