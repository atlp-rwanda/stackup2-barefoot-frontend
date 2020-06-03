/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import SectionHeader from '../SectionHeader';

const title = 'Trip requests';

describe('<SectionHeader/>', () => {
  afterEach(() => cleanup);

  it('Should match the SectionHeader component snapshot', () => {
    const tree = renderer.create(<SectionHeader title={title} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
