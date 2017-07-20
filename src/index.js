import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import rootReducers from './reducers';
import {createStore} from 'redux';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={createStore(rootReducers)}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
