import { createSlice } from "@reduxjs/toolkit";
import { Category } from "../component/admin/Category";

const initialState = { nowPage: Category.신청페이지 };

export const adminPageSlice = createSlice({
    name: "adminPage",
    initialState,
    reducers: {
        setPage: (state, data) => {

            state.nowPage = data.payload
        },

    },
});

export const { setPage } = adminPageSlice.actions;

export default adminPageSlice.reducer;