import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import root from "./redcuers";
import {applyMiddleware, createStore, compose} from "redux";
import {Provider} from "react-redux";
import {devToolsEnhancer} from "redux-devtools-extension";
import thunk from "redux-thunk";

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    root,
    composeEnchancer(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <App />,
    </Provider>,
  document.getElementById('root')
);

