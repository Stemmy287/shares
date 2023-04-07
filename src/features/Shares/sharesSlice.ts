import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {sharesApi, SharesType} from "features/Shares/sharesApi";

export const fetchSharesTC = createAsyncThunk('shares/fetchShares', async (param, {rejectWithValue, dispatch}) => {
  try {
    const res = await sharesApi.getShares()
    dispatch(setShares(res))
    dispatch(paginator())
  } catch (e) {
    return rejectWithValue(null)
  }
})

export const slice = createSlice({
  name: 'sharesSlice',
  initialState: {
    shares: [] as DomainSharesType[],
    pagination: {
      currentPage: 1,
      pageSize: 10,
      totalItemsCount: 0,
      paginationData: [] as DomainSharesType[]
    }
  },
  reducers: {
    setShares(state, action: PayloadAction<SharesType[]>) {
      state.shares = action.payload.map((shr, i) => ({order: i + 1, ...shr}))
    },
    paginator(state) {
      state.pagination.totalItemsCount = state.shares.length
      const start = state.pagination.pageSize * (state.pagination.currentPage - 1)
      const end = start + state.pagination.pageSize
      state.pagination.paginationData = state.shares.slice(start, end)
    },
    setCurrentPage(state, action: PayloadAction<{currentPage: number}>) {
      state.pagination.currentPage = action.payload.currentPage
    },
    setPageSize(state, action: PayloadAction<{pageSize: number}>) {
      state.pagination.pageSize = action.payload.pageSize
    }
  }
})

export const sharesSlice = slice.reducer
export const {setShares, paginator, setCurrentPage, setPageSize} = slice.actions

//types
export type DomainSharesType = SharesType & { order: number }

