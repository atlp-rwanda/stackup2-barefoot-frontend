/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import Footer from '../Footer';

describe('<Footer/>', () => {
  afterEach(cleanup);
  it('Should match the Footer component snapshot', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
