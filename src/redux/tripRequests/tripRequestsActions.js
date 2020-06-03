import axios from 'axios';
import {
  FETCH_TRIP_REQUESTS_REQUEST,
  FETCH_TRIP_REQUESTS_SUCCESS,
  FETCH_TRIP_REQUESTS_FAILURE,
} from './tripRequestsTypes';

export const fetchTripRequestsRequest = () => ({
  type: FETCH_TRIP_REQUESTS_REQUEST,
});

export const fetchTripRequestsSuccess = (tripRequests) => ({
  type: FETCH_TRIP_REQUESTS_SUCCESS,
  payload: tripRequests,
});

export const fetchTripRequestsFailure = (error) => ({
  type: FETCH_TRIP_REQUESTS_FAILURE,
  payload: error,
});

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_SOME_TOKEN}`,
    'Content-Type': 'application/json',
  },
  method: 'GET',
});

export const fetchTripRequests = () => async (dispatch) => {
  dispatch(fetchTripRequestsRequest);
  await api.get('/trips')
    .then((res) => {
      dispatch(fetchTripRequestsSuccess(res.data.data.foundRequests));
    }).catch((err) => {
      if (err.response.status === 400) {
        const errorMessage = err.response.data.error;
        dispatch(fetchTripRequestsFailure(errorMessage));
      } else {
        const tripRequests = [];
        dispatch(fetchTripRequestsSuccess(tripRequests));
      }
    });
};
