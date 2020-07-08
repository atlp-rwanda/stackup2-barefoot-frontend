/* eslint-disable no-undef */
import tripRequestsReducer from '../tripRequestsReducer';
import {
  FETCH_TRIP_REQUESTS_REQUEST,
  FETCH_TRIP_REQUESTS_SUCCESS,
  FETCH_TRIP_REQUESTS_FAILURE,
} from '../tripRequestsTypes';
import data from '../../../__tests__/data/data';

const { tripRequests } = data;
const error = 'Token failed!';

describe('Trip Requests Reducer Test INITIAL_STATE', () => {
  it('is ok', () => {
    const action = { type: 'something' };
    const initialState = {
      loading: true,
      tripRequests: [],
      error: '',
    };

    expect(tripRequestsReducer(undefined, action)).toEqual(initialState);
  });
});

describe('Trip Requests Reducer Test FETCH_TRIP_REQUESTS_REQUEST', () => {
  it('returns correct state', () => {
    const action = { type: FETCH_TRIP_REQUESTS_REQUEST };
    const expectedState = {
      loading: true,
      tripRequests: [],
      error: '',
    };

    expect(tripRequestsReducer(undefined, action)).toEqual(expectedState);
  });
});

describe('Trip Requests Reducer Test FETCH_TRIP_REQUESTS_SUCCESS', () => {
  it('returns correct state', () => {
    const action = {
      type: FETCH_TRIP_REQUESTS_SUCCESS,
      payload: tripRequests,
    };
    const expectedState = {
      loading: false,
      tripRequests,
      error: '',
    };

    expect(tripRequestsReducer(undefined, action)).toEqual(expectedState);
  });
});

describe('Trip Requests Reducer Test FETCH_TRIP_REQUESTS_FAILURE', () => {
  it('returns correct state', () => {
    const action = {
      type: FETCH_TRIP_REQUESTS_FAILURE,
      payload: error,
    };
    const expectedState = {
      loading: false,
      tripRequests: [],
      error,
    };

    expect(tripRequestsReducer(undefined, action)).toEqual(expectedState);
  });
});
