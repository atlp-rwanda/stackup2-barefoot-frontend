import firstMessage from '../actions/actions';
import LOGIN_HANDLE from './loginTypes';

export const initialState = {
  message: 'Welcome',
  errors: '',
  success: false,
  token: '',
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case firstMessage.type:
      return {
        message: `${action.value}`,
      };
    case LOGIN_HANDLE:
      return {
        ...state,
        errors: action.payload.error,
        success: action.payload.success || state.success,
        token: action.payload.token || state.token,
      };
    default:
      return state;
  }
};

export default reducer;
