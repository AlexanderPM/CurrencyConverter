import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import store from './redux/store';
import App from './app/app';
import './index.css';
import { asyncApi } from './redux/actions/actions';


store.dispatch(asyncApi());

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);