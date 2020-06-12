/* eslint-disable no-undef */
import 'regenerator-runtime/runtime';
import reducer, { initialState } from '../../redux/login/reducer';
import LOGIN_HANDLE from '../../redux/login/loginTypes';


describe('', () => {
  it('should return Redux when action is provided with value', () => {
    const payload = {
      error: 'invalid email',
    };
    const expected = {
      ...initialState,
      errors: payload.error,
    };
    expect(reducer(undefined, { type: LOGIN_HANDLE, payload })).toEqual(expected);
  });
});
