/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import CssBaseline from '@material-ui/core/CssBaseline';
import { shallow } from 'enzyme';
import rootReducer from '../../redux/rootReducer';
import App from '../App';

const middlewares = [thunk];

const testStore = (state) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMiddleware(rootReducer, state);
};

const store = testStore({});

describe('<App />', () => {
  it('Should render the App component', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(wrapper.contains(<CssBaseline />));
    expect(wrapper.contains(<Router />));
  });
});
