import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {sharesApi, SharesType} from "features/Shares/sharesApi";
import {AppRootStateType} from "app/store";
import {setLoading} from "app/appSlice";
import {errorUtil} from "common/utils/errorUtils";
import {AxiosError} from "axios";


export const fetchSharesTC = createAsyncThunk('shares/fetchShares', async (param, {
  dispatch,
  getState
}) => {

  dispatch(setLoading({isLoading: true}))

  const state = getState() as AppRootStateType
  const company = state.sharesReducer.queryParams.company

  try {
    const res = await sharesApi.getShares(company)
    dispatch(setShares(res))
    dispatch(paginator())
  } catch (e) {
    errorUtil(e as Error | AxiosError<{ error: string }>, dispatch)
  } finally {
    dispatch(setLoading({isLoading: false}))
  }
})

export const slice = createSlice({
  name: 'sharesSlice',
  initialState: {
    shares: [] as DomainSharesType[],
    queryParams: {
      company: 'tsla' as CompanyType
    },
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
    setCurrentPage(state, action: PayloadAction<{ currentPage: number }>) {
      state.pagination.currentPage = action.payload.currentPage
    },
    setPageSize(state, action: PayloadAction<{ pageSize: number }>) {
      state.pagination.pageSize = action.payload.pageSize
    },
    setCompany(state, action: PayloadAction<{ company: CompanyType }>) {
      state.queryParams.company = action.payload.company
    }
  }
})

export const sharesSlice = slice.reducer
export const {setShares, paginator, setCurrentPage, setPageSize, setCompany} = slice.actions

//types
export type DomainSharesType = SharesType & { order: number }
export type CompanyType = 'tsla' | 'amzn' | 'aapl' | 'msft'

