/* eslint-disable react/prop-types */
import { Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { likeSong, selectSong, unlikeSong } from '../redux/actions'

const SongCard = ({ song }) => {
  const dispatch = useDispatch()
  const likedSongs = useSelector((state) => state.liked)

  return (
    <Col className="text-center">
      <div className="position-relative cardContainer">
        <img
          className="img-fluid pointer w-100"
          src={song.album.cover_xl}
          alt="track"
          onClick={() => dispatch(selectSong(song))}
        />
        <Button
          variant={likedSongs.includes(song) ? 'danger' : 'success'}
          className="position-absolute rounded-circle deleteBtn"
          onClick={() =>
            likedSongs.includes(song)
              ? dispatch(unlikeSong(song.id))
              : dispatch(likeSong(song))
          }
        >
          {likedSongs.includes(song) ? (
            <i className="bi bi-trash3-fill"></i>
          ) : (
            <i className="bi bi-heart-fill"></i>
          )}
        </Button>
      </div>
      <p>
        Track: {'"' + song.title + '"'}
        <br />
        Artist: {song.artist.name}
      </p>
    </Col>
  )
}

export default SongCard
