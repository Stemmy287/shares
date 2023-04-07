import {AnyAction, combineReducers, configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import {sharesSlice} from "features/Shares/sharesSlice";
import {appSlice} from "app/appSlice";

const rootReducer = combineReducers({
  app: appSlice,
  sharesReducer: sharesSlice
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend()
})

//types
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunkDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>