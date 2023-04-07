import {AxiosError} from "axios";
import {Dispatch} from "@reduxjs/toolkit";
import axios from "axios";
import {setError, setLoading} from "app/appSlice";

export const errorUtil = (e: Error | AxiosError<{error: string}>, dispatch: Dispatch) => {
  const err = e as Error | AxiosError<{ error: string }>
  if (axios.isAxiosError(err)) {
    const error = err.response?.data ? err.response.data : err.message
    dispatch(setError({error}))
    dispatch(setLoading({isLoading: false}))
  } else {
    dispatch(setError({error: `native error ${err.message}` }))
    dispatch(setLoading({isLoading: false}))
  }
}