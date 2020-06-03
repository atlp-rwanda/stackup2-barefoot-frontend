/* eslint-disable import/prefer-default-export */
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../redux/rootReducer';
import { middlewares } from '../redux/store';

export const mockStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
};
