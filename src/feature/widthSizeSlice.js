import { createSlice } from "@reduxjs/toolkit";

const initialState = { isSmallScreen: false };

export const widthSizeSlice = createSlice({
    name: "widthSize",
    initialState,
    reducers: {
        setWidthSize: (state, actions) => {
            console.log("계속불리고있음")
            state.isSmallScreen = actions.payload
        },

    },
});

export const { setWidthSize } = widthSizeSlice.actions;

export default widthSizeSlice.reducer;