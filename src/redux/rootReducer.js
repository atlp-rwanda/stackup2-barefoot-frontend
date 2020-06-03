import { combineReducers } from 'redux';
import tripRequestsReducer from './tripRequests/tripRequestsReducer';

const rootReducer = combineReducers({
  tripRequests: tripRequestsReducer,
});

export default rootReducer;
