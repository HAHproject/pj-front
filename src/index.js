import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";
import router from "./Router";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import store from "../src/ducks/index"

export let persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
            <RouterProvider router={router} />
        </PersistGate>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
