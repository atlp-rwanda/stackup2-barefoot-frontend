/* eslint-disable no-undef */
import 'regenerator-runtime/runtime';
import userLogin from '../../helpers/userLogin';
import global from '../action/loginAction.test';

describe('login helpers', () => {
  it('login functionality success', async () => {
    const credentials = {
      email: 'travel@gmail.com',
      password: 'TravelAdmin2@',
    };
    await userLogin(credentials);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  it('login functionality fail', async () => {
    const credentials = {
      email: 'travel',
      password: 'Travel',
    };
    global.fetch = jest.fn(() => Promise.reject());
    await userLogin(credentials);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
