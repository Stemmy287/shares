import {
  CompanyType,
  DomainStockType,
  InitialStockStateType, paginator, setCompany,
  setCurrentPage,
  setPageSize, setStock,
  stockReducer
} from "features/Stock/stockReducer";
import {stockData} from "common/assets/stockDataForTests";

let initialState: InitialStockStateType

beforeEach(() => {
  initialState = {
    stock: stockData as DomainStockType[],
    queryParams: {
      company: 'tsla' as CompanyType
    },
    pagination: {
      currentPage: 1,
      pageSize: 10,
      totalItemsCount: 0,
      paginationData: [] as DomainStockType[]
    }
  }
})

describe('stock', () => {

  test('setStock', () => {
    const stock = [{
      order: 1,
      change: 0,
      changeOverTime: 0,
      changePercent: 0,
      close: 173.44,
      date: "2023-03-10",
      fClose: 173.44,
      fHigh: 178.29,
      fLow: 168.44,
      fOpen: 175.13,
      fVolume: 191488872,
      high: 178.29,
      id: "HISTORICAL_PRICES",
      key: "TSLA",
      label: "Mar 10, 23",
      low: 168.44,
      marketChangeOverTime: 0,
      open: 175.13,
      priceDate: "2023-03-10",
      subkey: "",
      symbol: "TSLA",
      uClose: 173.44,
      uHigh: 178.29,
      uLow: 168.44,
      uOpen: 175.13,
      uVolume: 191488872,
      updated: 1678501972000,
      volume: 191488872,
    }]
    const action = setStock(stock)
    const copyState = stockReducer(initialState, action)

    expect(copyState.stock.length).toBe(1)
  })

})

describe('queryParams', () => {

  test('set company', () => {
    const action = setCompany({company: 'msft'})
    const copyState = stockReducer(initialState, action)

    expect(copyState.queryParams.company).toBe('msft')
  })

})

describe('pagination', () => {

  test('paginator', () => {
    const action = paginator()
    const copyState = stockReducer(initialState, action)

    expect(copyState.pagination.paginationData.length).toBe(10)
    expect(copyState.pagination.totalItemsCount).toBe(12)
  })

  test('set current page', () => {
    const action = setCurrentPage({currentPage: 2})
    const copyState = stockReducer(initialState, action)

    expect(copyState.pagination.currentPage).toBe(2)
  })

  test('set page size', () => {
    const action = setPageSize({pageSize: 5})
    const copyState = stockReducer(initialState, action)

    expect(copyState.pagination.pageSize).toBe(5)
  })

})

