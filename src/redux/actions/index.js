// TYPE CONSTS

export const SELECT_SONG = 'SELECT_SONG'
export const LIKE_SONG = 'LIKE_SONG'
export const UNLIKE_SONG = 'UNLIKE_SONGS'

// ACTIONS

export const selectSong = (song) => ({ type: SELECT_SONG, payload: song })
export const likeSong = (song) => ({ type: LIKE_SONG, payload: song })
export const unlikeSong = (id) => ({ type: UNLIKE_SONG, payload: id })
