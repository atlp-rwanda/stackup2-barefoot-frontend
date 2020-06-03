/* eslint-disable no-undef */
import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import { cleanup } from '@testing-library/react';
import UserProfileCard from '../UserProfileCard';

describe('<UserProfileCard />', () => {
  afterEach(() => cleanup);

  it('Should match the UserProfileCard snapshot', () => {
    const component = createMount()(
      <UserProfileCard />,
    );
    expect(component.html).toMatchSnapshot();
  });
});
