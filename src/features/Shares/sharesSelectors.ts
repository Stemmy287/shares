import {AppRootStateType} from "app/store";

export const sharesPaginatedSelector = (state: AppRootStateType) => state.sharesReducer.pagination.paginationData
export const sharesSelector = (state: AppRootStateType) => state.sharesReducer.shares

//query params
export const companySelector = (state: AppRootStateType) => state.sharesReducer.queryParams.company

//paginator
export const currentPageSelector = (state: AppRootStateType) => state.sharesReducer.pagination.currentPage
export const pageSizeSelector = (state: AppRootStateType) => state.sharesReducer.pagination.pageSize
export const totalItemsCountSelector = (state: AppRootStateType) => state.sharesReducer.pagination.totalItemsCount