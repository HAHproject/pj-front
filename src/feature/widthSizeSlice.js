import { createSlice } from "@reduxjs/toolkit";

const initialState = { isSmallScreen: false };

export const widthSizeSlice = createSlice({
    name: "widthSize",
    initialState,
    reducers: {
        setWidthSize: (state, actions) => {
            state.isSmallScreen = actions.payload
        },


    },
});

export const { setWidthSize } = widthSizeSlice.actions;

export default widthSizeSlice.reducer;