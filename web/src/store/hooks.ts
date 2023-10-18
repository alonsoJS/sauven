import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store.ts";

export const useStoreDispatch = () => useDispatch<AppDispatch>()
export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector