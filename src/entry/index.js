
import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore, applyMiddleware } from 'redux';y
import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
import App from './App';
import '../assets/styles/sass/index.scss';
import '../assets/styles/css/index.css';
import configureStore from '../store/configureStore';

const store = configureStore();

// const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
