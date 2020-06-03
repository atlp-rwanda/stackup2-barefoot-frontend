/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-undef */
import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import Card from '@material-ui/core/Card';
import { cleanup } from '@testing-library/react';
import { RequestsTablePage } from '../RequestsTablePage';
import requests from '../../../__tests__/data/data';

const fetchTripRequests = jest.fn();
const dataProps = {
  loading: false,
  error: '',
  requests,
  fetchTripRequests,
};

describe('<RequestsTablePage/>', () => {
  afterEach(() => cleanup);

  it('Should render the RequestsTablePage component', () => {
    const component = createMount()(
      <RequestsTablePage {...dataProps} />,
    );
    expect(component.find(Card)).toHaveLength(1);
  });
});
