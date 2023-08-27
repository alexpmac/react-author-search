import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { authorSlice } from "../slices/author-slice"

export const store = configureStore({
  reducer: {
	authors: authorSlice.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
