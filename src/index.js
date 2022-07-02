import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from 'react-redux';
import reducer from "./redux/reducers";
import rootSaga from "./redux/sagas";
import { logger } from 'redux-logger';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(reducer, applyMiddleware(sagaMiddleware,logger));

// then run the saga
sagaMiddleware.run(rootSaga);

// render the application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store={store}>
        <App />
  </Provider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
