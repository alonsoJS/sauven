import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { fileReducer } from "./reducers/file/file.reducer.ts";

export const store = configureStore({
  reducer: {
    file: fileReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>