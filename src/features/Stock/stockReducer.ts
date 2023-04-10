import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {stockApi, StockType} from "features/Stock/stockApi";
import {AppRootStateType} from "app/store";
import {setLoading} from "app/appReducer";
import {errorHandler} from "common/utils/errorHandler/errorHandler";
import {AxiosError} from "axios";


export const fetchStockTC = createAsyncThunk('shares/fetchShares', async (param, {
  dispatch,
  getState
}) => {

  dispatch(setLoading({isLoading: true}))

  const state = getState() as AppRootStateType
  const company = state.stockReducer.queryParams.company

  try {
    const res = await stockApi.getStock(company)
    dispatch(setStock(res))
    dispatch(paginator())
  } catch (e) {
    errorHandler(e as Error | AxiosError<{ error: string }>, dispatch)
  } finally {
    dispatch(setLoading({isLoading: false}))
  }
})

const slice = createSlice({
  name: 'stockSlice',
  initialState: {
    stock: [] as DomainStockType[],
    queryParams: {
      company: 'tsla' as CompanyType
    },
    pagination: {
      currentPage: 1,
      pageSize: 10,
      totalItemsCount: 0,
      paginationData: [] as DomainStockType[]
    }
  },
  reducers: {
    setStock(state, action: PayloadAction<StockType[]>) {
      state.stock = action.payload.map((shr, i) => ({order: i + 1, ...shr}))
    },
    paginator(state) {
      state.pagination.totalItemsCount = state.stock.length
      const start = state.pagination.pageSize * (state.pagination.currentPage - 1)
      const end = start + state.pagination.pageSize
      state.pagination.paginationData = state.stock.slice(start, end)
    },
    setCurrentPage(state, action: PayloadAction<{ currentPage: number }>) {
      state.pagination.currentPage = action.payload.currentPage
    },
    setPageSize(state, action: PayloadAction<{ pageSize: number}>) {
      state.pagination.pageSize = action.payload.pageSize
    },
    setCompany(state, action: PayloadAction<{ company: CompanyType }>) {
      state.queryParams.company = action.payload.company
    }
  }
})

export const stockReducer = slice.reducer
export const {setStock, paginator, setCurrentPage, setPageSize, setCompany} = slice.actions

//types
export type DomainStockType = StockType & { order: number }
export type CompanyType = 'tsla' | 'amzn' | 'aapl' | 'msft'

export type InitialStockStateType = ReturnType<typeof slice.getInitialState>

