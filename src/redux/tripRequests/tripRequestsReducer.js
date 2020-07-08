import {
  FETCH_TRIP_REQUESTS_REQUEST,
  FETCH_TRIP_REQUESTS_SUCCESS,
  FETCH_TRIP_REQUESTS_FAILURE,
} from './tripRequestsTypes';

const initialState = {
  loading: true,
  tripRequests: [],
  error: '',
};

const tripRequestsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_TRIP_REQUESTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TRIP_REQUESTS_SUCCESS:
      return {
        loading: false,
        tripRequests: payload,
        error: '',
      };
    case FETCH_TRIP_REQUESTS_FAILURE:
      return {
        loading: false,
        tripRequests: [],
        error: payload,
      };
    default: return state;
  }
};

export default tripRequestsReducer;
