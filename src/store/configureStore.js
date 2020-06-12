import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../redux/login/reducer';

const configureStore = () => {
  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, composeWithDevTools()];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(reducer, undefined, composedEnhancers);

  return store;
};

export default configureStore;
