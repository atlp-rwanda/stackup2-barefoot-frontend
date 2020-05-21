import firstMessage from '../actions/actions';

const initialState = {
  message: 'Welcome',
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case firstMessage.type:
      return {
        message: `${action.value}`,
      };
    default:
      return state;
  }
};

export default reducer;
