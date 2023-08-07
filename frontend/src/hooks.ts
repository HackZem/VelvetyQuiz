import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { TDispatchState, TRootState } from "./redux/store";

export const useAppDispatch = () => <TDispatchState>useDispatch();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
