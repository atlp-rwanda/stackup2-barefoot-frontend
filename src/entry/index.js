
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import '../styles/sass/index.scss';
import '../styles/css/index.css';
import reducer from '../reducers/reducer';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
