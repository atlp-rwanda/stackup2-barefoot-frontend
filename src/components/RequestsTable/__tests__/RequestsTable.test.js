/* eslint-disable no-undef */
import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import { cleanup } from '@testing-library/react';
import RequestsTable from '../RequestsTable';

const requests = [
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
  {
    id: 3,
    trips: [
      {
        travelDate: '2020-09-11',
        travelFrom: 'Kigali',
        travelTo: 'Dubai',
      },
    ],
    travelReason: 'Africa Tech Summit',
    accommodation: false,
    status: 'pending',
  },
  {
    id: 4,
    trips: [
      {
        travelDate: '2020-09-12',
        travelFrom: 'Kigali',
        travelTo: 'Dubai',
      },
    ],
    travelReason: 'Africa Tech Summit',
    accommodation: false,
    status: 'accepted',
  },
];

describe('<RequestsTable />', () => {
  afterEach(() => cleanup);

  it('Should match the RequestsTable snapshot', () => {
    const component = createMount()(
      <RequestsTable requests={requests} />,
    );
    expect(component.html).toMatchSnapshot();
  });

  it('Should match the RequestsTable snapshot when no requests', () => {
    const component = createMount()(
      <RequestsTable requests={[]} />,
    );
    expect(component.html).toMatchSnapshot();
  });
});
