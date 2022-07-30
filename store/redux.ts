import {
    configureStore,
    combineReducers,
    AnyAction,
    CombinedState,
} from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import CurCategorySlice, { CurCategoryState } from "./CurCategory";
import { Reducer } from "@reduxjs/toolkit";

export interface RootState {
    category: CurCategoryState;
}
const RootReducer = (
    state: RootState,
    action: AnyAction
): CombinedState<RootState> => {
    if (action.type === HYDRATE) return { ...state, ...action.payload };
    const combinedReducer = combineReducers({
        category: CurCategorySlice.reducer,
    });
    return combinedReducer(state, action);
};

const makeStore = () =>
    configureStore({
        reducer: RootReducer as Reducer<CombinedState<RootState>, AnyAction>,
        devTools: process.env.NODE_ENV === "development",
    });

export const wrapper = createWrapper(makeStore);
