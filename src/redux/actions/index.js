// TYPE CONSTS
export const SELECT_SONG = 'SELECT_SONG'
export const LIKE_SONG = 'LIKE_SONG'
export const UNLIKE_SONG = 'UNLIKE_SONGS'
export const SAVE_SEARCH_RESULTS = 'SAVE_SEARCH_RESULTS'
export const SAVE_QUERY = 'SAVE_QUERY'
export const LOAD = 'LOAD'

// ACTIONS
export const selectSong = (song) => ({ type: SELECT_SONG, payload: song })
export const likeSong = (song) => ({ type: LIKE_SONG, payload: song })
export const unlikeSong = (id) => ({ type: UNLIKE_SONG, payload: id })
export const saveQuery = (query) => ({ type: SAVE_QUERY, payload: query })
export const saveSearch = (query) => {
  return async (dispatch) => {
    dispatch({ type: LOAD })
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/deezer/search?q=' + query
      )
      if (response.ok) {
        const { data } = await response.json()
        dispatch({ type: SAVE_SEARCH_RESULTS, payload: data })
      } else {
        throw new Error('Error in fetching songs')
      }
    } catch (err) {
      console.log('error', err)
    }
  }
}
