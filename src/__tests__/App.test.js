/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { mount, shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import App from '../entry/App';
import LandingPage from '../views/LandingPage/LandingPage';
import reducer from '../reducers/reducer';
import firstMessage from '../actions/actions';

const mockStore = configureStore([]);
const store = mockStore({
  message: 'Welcome',
});
store.dispatch = jest.fn();
const component = renderer.create(
  <Provider store={store}>
    <LandingPage />
  </Provider>,
);
describe('App tests', () => {
  it('Will prove that the app is rendered from App component', () => {
    const appRender = shallow(<App />);
    expect(appRender.contains(<LandingPage />));
  });

  it('should return welcome when no action provided', () => {
    expect(reducer(undefined, {})).toEqual({ message: 'Welcome' });
  });
  it('should return Redux when action is provided with value', () => {
    expect(reducer(undefined, { ...firstMessage, value: 'Redux' })).toEqual({ message: 'Redux' });
  });
});
