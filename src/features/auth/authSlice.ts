import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { IUser } from "../../types/types"

interface AuthState {
  token: string | null
  user: IUser | null
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    user: null,
  } as AuthState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      localStorage.setItem("tm-token", action.payload)
      state.token = action.payload
    },
    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload
    },
  },
})

export const { setToken, setUser } = authSlice.actions
export default authSlice.reducer
