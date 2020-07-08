/* eslint-disable no-undef */
import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import * as actions from '../tripRequestsActions';
import { mockStore } from '../../../utils';

const testStore = configureStore();
const store = testStore();

describe('TripRequests actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('Dispatches the FETCH_TRIP_REQUESTS_REQUEST action', () => {
    store.dispatch(actions.fetchTripRequestsRequest());
    expect(store.getActions()).toMatchSnapshot();
  });

  it('Dispatches the FETCH_TRIP_REQUESTS_SUCCESS action', () => {
    store.dispatch(actions.fetchTripRequestsSuccess());
    expect(store.getActions()).toMatchSnapshot();
  });

  it('Dispatches the FETCH_TRIP_REQUESTS_FAILURE action', () => {
    store.dispatch(actions.fetchTripRequestsFailure());
    expect(store.getActions()).toMatchSnapshot();
  });

  // it('Mocks the fetchTripRequests special action', async () => {
  //   actions.fetchTripRequests = jest.fn(() =>
  // store.dispatch(actions.fetchTripRequestsRequest()));
  //   actions.fetchTripRequests();
  //   store.dispatch(actions.fetchTripRequests());
  //   expect(actions.fetchTripRequests).toHaveBeenCalled();
  // });
});

describe('FetchTripRequests action', () => {
  beforeEach(() => {
    moxios.install(actions.api);
  });

  afterEach(() => {
    moxios.uninstall(actions.api);
  });

  it('Updates store successfully', () => {
    const expectedState = [
      {
        id: 1,
        trips: [
          {
            travelDate: '2020-09-15',
            travelFrom: 'Kigali',
            travelTo: 'Durban',
          },
        ],
        travelReason: 'Africa Tech Summit',
        accommodation: true,
        status: 'pending',
      },
      {
        id: 2,
        trips: [
          {
            travelDate: '2020-09-10',
            travelFrom: 'Kigali',
            travelTo: 'Dubai',
          },
        ],
        travelReason: 'Africa Tech Summit',
        accommodation: true,
        status: 'pending',
      },
    ];
    const store = mockStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState,
      });
      request.reject({
        status: 400,
        response: {
          status: 400,
          data: {
            error: 'Invalid token',
          },
        },
      });
    });

    return store.dispatch(actions.fetchTripRequests()).then(() => {
      const newState = store.getState();
      expect(newState.requests).toBe(expectedState);
    }).catch(() => {
      const newState = store.getState();
      expect(newState.tripRequests.tripRequests).toEqual([]);
    });
  });
});
