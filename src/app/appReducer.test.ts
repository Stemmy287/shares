import {appReducer, InitialAppStateType, setError, setLoading} from "app/appReducer";

let initialState: InitialAppStateType

beforeEach(() => {
  initialState = {
    isLoading: false,
    error: '' as string | null
  }
})

test('set error', () => {
  const action = setError({error:'some error'})
  const copyState = appReducer(initialState, action)
  expect(copyState.error).toBe('some error')
})

test('set isLoading', () => {
  const action = setLoading({isLoading: true})
  const copyState = appReducer(initialState, action)
  expect(copyState.isLoading).toBe(true)
})