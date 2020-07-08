/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { cleanup } from '@testing-library/react';
import LandingPage from '../LandingPage';

describe('<LangingPage />', () => {
  afterEach(cleanup);

  it('Should test the LandingPage component', () => {
    const tree = shallow(<LandingPage />);
    expect(tree.find('.container').exists()).toBe(true);
  });
});
