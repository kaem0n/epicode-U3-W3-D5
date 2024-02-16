import { LIKE_SONG, SELECT_SONG, UNLIKE_SONG } from '../actions'

const defaultState = {
  songs: {
    selected: null,
    liked: [],
  },
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SELECT_SONG:
      return {
        ...state,
        songs: {
          ...state.songs,
          selected: action.payload,
        },
      }
    case LIKE_SONG:
      return {
        ...state,
        songs: {
          ...state.songs,
          liked: [...state.songs.liked, action.payload],
        },
      }
    case UNLIKE_SONG:
      return {
        ...state,
        songs: {
          ...state.songs,
          liked: state.songs.liked.filter((el) => el.id !== action.payload),
        },
      }
    default:
      return state
  }
}

export default reducer
