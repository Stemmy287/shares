import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {sharesApi, SharesType} from "features/Shares/sharesApi";

export const fetchSharesTC = createAsyncThunk('shares/fetchShares', async (param, {rejectWithValue}) => {
  try {
    const res = await sharesApi.getShares()
    return {res}
  } catch (e) {
    return rejectWithValue(null)
  }
})

export const slice = createSlice({
  name: 'sharesSlice',
  initialState: {
    shares: [] as DomainSharesType[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSharesTC.fulfilled, (state, action) => {
      state.shares = action.payload.res.map((shr, i) => ({order: i + 1,...shr}))
    })
  }
})

export const sharesSlice = slice.reducer

//types
export type DomainSharesType = SharesType & {order: number}
