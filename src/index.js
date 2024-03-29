import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { configureStore } from '@reduxjs/toolkit'
import { legacy_createStore as createStore } from 'redux';
import {Provider} from "react-redux";
const reducers = (state,action) => {
    if (action.type === 'PLUS') {
        return {
            ...state,
            count: state.count + 1
        }
    }
    if (action.type === 'MINUS') {
        return {
            ...state,
            count: state.count - 1
        }
    }


    return {
        count: 2
    }

}

const store = createStore(reducers)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
