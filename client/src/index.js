import React from 'react';
import {render} from 'react-dom';
import './index.scss';
import App from './modules/app';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./config/store";

import 'antd/dist/antd.min.css'
import './fonts/Half_Bold_Pixel-7/half-bold-pixel-7.regular.ttf';

import './i18n';

const container = document.getElementById('root');

// Create a root.
//const root = ReactDOM.createRoot(container);

render(
  <Provider store={store}>
    <App />
  </Provider >,
  container
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
