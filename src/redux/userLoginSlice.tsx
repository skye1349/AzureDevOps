// localAccountIdSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  profile: {
    username: '',
    localAccountId: '',
    login: false,
  },
}

const userLoginSlice = createSlice({
  name: 'localAccountId',
  initialState: initialState,
  reducers: {
    setLocalAccountId: (state, action) => {
      const { username, localAccountId } = action.payload
      state.profile = {
        username,
        localAccountId,
        login: true,
      }
    },
    clearLocalAccountId: (state) => {
      state.profile = initialState.profile
    },
  },
})

export const { setLocalAccountId, clearLocalAccountId } =
userLoginSlice.actions
export default userLoginSlice.reducer
