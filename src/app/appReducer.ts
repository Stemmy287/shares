import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'app',
  initialState: {
    isLoading: false,
    error: '' as string | null
  },
  reducers: {
    setLoading(state, action: PayloadAction<{isLoading: boolean}>) {
      state.isLoading = action.payload.isLoading
    },
    setError(state, action: PayloadAction<{error: string | null}>) {
      state.error = action.payload.error
    }
  }
})

export const appReducer = slice.reducer
export const {setLoading, setError} = slice.actions

//types
export type InitialAppStateType = ReturnType<typeof slice.getInitialState>