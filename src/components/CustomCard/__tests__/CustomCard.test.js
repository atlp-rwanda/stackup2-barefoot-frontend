/* eslint-disable no-undef */
import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import Link from '@material-ui/core/Link';
import { cleanup } from '@testing-library/react';
import CustomCard from '../CustomCard';

const title = 'Our Company';
const items = ['Careers', 'About', 'Vision'];

describe('<CustomCard />', () => {
  afterEach(() => cleanup);

  it('Should match the CustomCard snapshot', () => {
    const component = createMount()(
      <CustomCard title={title} items={items} />,
    );

    expect(component.html).toMatchSnapshot();
    expect(component.find(Link)).toHaveLength(3);
  });
});
