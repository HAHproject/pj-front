import {createSlice} from "@reduxjs/toolkit";

const initialIsLoginState = {
    loginInfo : {
        isLogin : false,
        name : null,
        token: null,
        userId:null
    }
}

const loginCheckSlice = createSlice({
    name : 'isLogin',
    initialState : initialIsLoginState,
    reducers : {

        loginInfoSet(state, action) {
            state.loginInfo = action.payload;
        },

    }
})

export const loginCheckAction = loginCheckSlice.actions;
export default loginCheckSlice.reducer;
