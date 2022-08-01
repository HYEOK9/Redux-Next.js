import {
    configureStore,
    combineReducers,
    AnyAction,
    CombinedState,
    Reducer,
} from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import CurCategoryReducer, { CategoryState } from "./CurCategory";
export interface RootState {
    category: CategoryState;
}

const RootReducer = (
    state: RootState,
    action: AnyAction
): CombinedState<RootState> => {
    if (action.type === HYDRATE) return { ...state, ...action.payload };
    const combinedReducer = combineReducers({ category: CurCategoryReducer });
    return combinedReducer(state, action);
};

const MakeStore = () =>
    configureStore({
        reducer: RootReducer as Reducer<CombinedState<RootState>, AnyAction>,
    });

export const wrapper = createWrapper(MakeStore);
