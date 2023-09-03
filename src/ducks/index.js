import {persistReducer} from "redux-persist";
import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import pageNavigatorReducer from "../ducks/pageNavigator"
import loginCheckReducer from "../ducks/loginCheck"
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
    pageNavigator : pageNavigatorReducer,
    loginCheck : loginCheckReducer,
})

const persistConfig = {
    key : 'root',

    storage,


    whitelist : ['loginCheck']
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export default store;