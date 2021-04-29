import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
      <Provider store={store} >
          <App />
      </Provider>
  </BrowserRouter>, document.getElementById('root'));

reportWebVitals();