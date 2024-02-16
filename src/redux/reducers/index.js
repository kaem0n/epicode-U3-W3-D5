import {
  LIKE_SONG,
  LOAD,
  SAVE_QUERY,
  SAVE_SEARCH_RESULTS,
  SELECT_SONG,
  UNLIKE_SONG,
} from '../actions'

const defaultState = {
  selected: null,
  liked: [],
  search: {
    query: '',
    list: [],
    isLoading: false,
  },
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SELECT_SONG:
      return {
        ...state,
        selected: action.payload,
      }
    case LIKE_SONG:
      return {
        ...state,
        liked: [...state.liked, action.payload],
      }
    case UNLIKE_SONG:
      return {
        ...state,
        liked: state.liked.filter((el) => el.id !== action.payload),
      }
    case SAVE_QUERY:
      return {
        ...state,
        search: {
          ...state.search,
          query: action.payload,
        },
      }
    case SAVE_SEARCH_RESULTS:
      return {
        ...state,
        search: {
          ...state.search,
          list: action.payload,
          isLoading: false,
        },
      }
    case LOAD:
      return {
        ...state,
        search: {
          ...state.search,
          isLoading: true,
        },
      }
    default:
      return state
  }
}

export default reducer
