/* eslint-disable no-undef */
import 'regenerator-runtime/runtime';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import handleLogin from '../../redux/login/loginActions';

const mockStore = configureStore([thunk]);
const store = mockStore();
const dispatchLogin = (data) => store.dispatch(handleLogin(data));
export default global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({}),
}));
describe('login actions', () => {
  beforeEach(() => {
    store.clearActions();
  });
  test('Dispatches the correct action and payload', () => {
    const data = {
      email: 'diny@gmail.com',
      password: 'Diny@2020',
    };
    dispatchLogin(data);
    expect(store.getActions()).toMatchSnapshot();
  });
  test('Dispatches the correct action and payload of wrong email', () => {
    dispatchLogin({ email: 'din', password: 'Diny@2020' });
    expect(store.getActions()).toMatchSnapshot();
  });
});
