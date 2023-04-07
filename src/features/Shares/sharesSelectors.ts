import {AppRootStateType} from "app/store";

export const sharesSelector = (state: AppRootStateType) => state.sharesReducer.pagination.paginationData

//query params
export const currentPageSelector = (state: AppRootStateType) => state.sharesReducer.pagination.currentPage
export const pageSizeSelector = (state: AppRootStateType) => state.sharesReducer.pagination.pageSize
export const totalItemsCountSelector = (state: AppRootStateType) => state.sharesReducer.pagination.totalItemsCount