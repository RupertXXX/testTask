import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/store';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <HashRouter>
      <Provider store={store} >
          <App />
      </Provider>
  </HashRouter>, document.getElementById('root'));

reportWebVitals();