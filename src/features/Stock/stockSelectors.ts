import {AppRootStateType} from "app/store";

export const stockPaginatedSelector = (state: AppRootStateType) => state.stockReducer.pagination.paginationData
export const stockSelector = (state: AppRootStateType) => state.stockReducer.stock

//query params
export const companySelector = (state: AppRootStateType) => state.stockReducer.queryParams.company

//paginator
export const currentPageSelector = (state: AppRootStateType) => state.stockReducer.pagination.currentPage
export const pageSizeSelector = (state: AppRootStateType) => state.stockReducer.pagination.pageSize
export const totalItemsCountSelector = (state: AppRootStateType) => state.stockReducer.pagination.totalItemsCount