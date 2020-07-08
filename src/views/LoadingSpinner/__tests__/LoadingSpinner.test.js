/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import LoadingSpinner from '../LoadingSpinner';

describe('<LoadingSpinner/>', () => {
  afterEach(cleanup);
  it('Should match the LoadingSpinner component snapshot', () => {
    const tree = renderer.create(<LoadingSpinner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
