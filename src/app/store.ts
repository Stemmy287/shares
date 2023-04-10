import {AnyAction, combineReducers, configureStore, ThunkDispatch} from "@reduxjs/toolkit";

import {appSlice} from "app/appSlice";
import {stockSlice} from "features/Stock/stockSlice";

const rootReducer = combineReducers({
  app: appSlice,
  stockReducer: stockSlice
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend()
})

//types
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunkDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>