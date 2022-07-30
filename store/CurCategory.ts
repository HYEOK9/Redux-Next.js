import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CurCategoryState {
    name: string;
}
const initialState: CurCategoryState = {
    name: "none",
};
const CurCategorySlice = createSlice({
    name: "CurCategory",
    initialState,
    reducers: {
        changeCurCategory: (
            state: CurCategoryState,
            action: PayloadAction<string>
        ) => {
            state.name = action.payload;
        },
    },
});

export const { changeCurCategory } = CurCategorySlice.actions;
export default CurCategorySlice;
