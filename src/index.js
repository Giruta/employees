import React from 'react';
import ReactDOM from 'react-dom';
import {compose, createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import {rootReducer} from "./redux/rootReducer";
import App from './component/App';
import * as serviceWorker from './serviceWorker';
import {sagaWatcher} from "./redux/sagas";

const saga = createSagaMiddleware();
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, saga), reduxDevTools)
)

saga.run(sagaWatcher)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
