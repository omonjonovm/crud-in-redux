import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import indexSlicerReducer from './toolkit/Slicer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        indexState: indexSlicerReducer,
    },
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);
