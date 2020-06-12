import LOGIN_HANDLE from './loginTypes';
import login from '../../helpers/userLogin';

const loginError = (data) => ({ type: LOGIN_HANDLE, payload: data });

const handleLogin = (credentials) => async (dispatch) => {
  if (credentials.email.length === 0 || !(new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(credentials.email))) {
    dispatch(loginError({ error: 'Invalid email' }));
    return;
  }
  const result = await login(credentials);
  const { error, token } = result;
  const output = token
    ? { success: true, error: '', token } : { error };
  dispatch(loginError(output));
};

export default handleLogin;
