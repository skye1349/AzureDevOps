// store.js
import { configureStore } from '@reduxjs/toolkit'
import userLoginSlice from './userLoginSlice'

const store = configureStore({
  reducer: {
    userLogin: userLoginSlice,
    // Other reducers can be added here
  },
})

export default store
