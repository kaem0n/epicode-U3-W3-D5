import {
  LIKE_SONG,
  LOAD,
  SAVE_QUERY,
  SAVE_SEARCH_RESULTS,
  SELECT_SONG,
  UNLIKE_SONG,
} from '../actions'

const defaultState = {
  songs: {
    selected: null,
    liked: [],
    search: {
      query: '',
      list: [],
      isLoading: false,
    },
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
    case SAVE_QUERY:
      return {
        ...state,
        songs: {
          ...state.songs,
          search: {
            ...state.songs.search,
            query: action.payload,
          },
        },
      }
    case SAVE_SEARCH_RESULTS:
      return {
        ...state,
        songs: {
          ...state.songs,
          search: {
            ...state.songs.search,
            list: action.payload,
            isLoading: false,
          },
        },
      }
    case LOAD:
      return {
        ...state,
        songs: {
          ...state.songs,
          search: {
            ...state.songs.search,
            isLoading: true,
          },
        },
      }
    default:
      return state
  }
}

export default reducer
