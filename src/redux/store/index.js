import { combineReducers, configureStore } from '@reduxjs/toolkit'
import reducer from '../reducers'

// const globalReducer = combineReducers({
//   something: () => {
//     console.log('yeah!')
//   },
//   moreOfIt: () => {
//     console.log('yeah!')
//   },
// })

const store = configureStore({
  reducer: reducer,
})

export default store
