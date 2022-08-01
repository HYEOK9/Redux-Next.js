import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CategoryState {
    name: string;
}

const initialState: CategoryState = {
    name: "none",
};
const CurCategorySlice = createSlice({
    name: "CurCategorySlice",
    initialState,
    reducers: {
        changeCurCategory: (
            state: CategoryState,
            action: PayloadAction<string>
        ) => {
            state.name = action.payload;
        },
    },
});

export const CurCategoryActions = CurCategorySlice.actions;
export default CurCategorySlice.reducer;
