/* eslint-disable no-undef */
import { mount, shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import customMessage from '../utils/customMessages';
import App from '../entry/App';
import HelloComponent from '../components/HelloComponent';
import FrontPage from '../views/frontPage';
import reducer from '../reducers/reducer';
import firstMessage from '../actions/actions';

let component = '';

const mockStore = configureStore([]);
const store = mockStore({
  message: 'Welcome',
});
store.dispatch = jest.fn();
component = renderer.create(
  <Provider store={store}>
    <HelloComponent />
  </Provider>,
);
describe('App tests', () => {
  it('Will prove that the app is rendered from App component', () => {
    const appRender = shallow(<App />);
    expect(appRender.contains(<HelloComponent />));
  });

  it('Will show the home page', () => {
    const homePage = mount(<Provider store={store}><HelloComponent /></Provider>);
    expect(homePage.text()).toEqual(`${customMessage.welcomeToBarefootNomad}Welcometry redux`);
  });

  it('Will show the front page', () => {
    const frontPage = mount(<FrontPage />);
    expect(frontPage.text()).toEqual('Welcome to React appreact router dom is well configured!!!');
  });

  it('should return welcome when no action provided', () => {
    expect(reducer(undefined, {})).toEqual({ message: 'Welcome' });
  });
  it('should return Redux when action is provided with value', () => {
    expect(reducer(undefined, { ...firstMessage, value: 'Redux' })).toEqual({ message: 'Redux' });
  });
  it('should dispatch an action on button click', () => {
    renderer.act(() => {
      component.root.findByType('button').props.onClick();
    });
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
