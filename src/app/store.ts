import {AnyAction, combineReducers, configureStore, ThunkDispatch} from "@reduxjs/toolkit";

const rootReducer = combineReducers({})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend()
})

//types
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunkDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>

// @ts-ignore
window.store = store