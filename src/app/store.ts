import {AnyAction, combineReducers, configureStore, ThunkDispatch} from "@reduxjs/toolkit";

import {appReducer} from "app/appReducer";
import {stockReducer} from "features/Stock/stockReducer";

const rootReducer = combineReducers({
  app: appReducer,
  stockReducer: stockReducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend()
})

//types
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunkDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>