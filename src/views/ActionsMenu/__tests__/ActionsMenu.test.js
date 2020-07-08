/* eslint-disable no-undef */
import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import Button from '@material-ui/core/Button';
import { cleanup } from '@testing-library/react';
import ActionsMenu from '../ActionsMenu';

const actions = [
  {
    id: 1,
    name: 'Edit',
  },
  {
    id: 2,
    name: 'Book Accommodation',
  },
  {
    id: 3,
    name: 'Rate Accommodation',
  },
  {
    id: 4,
    name: 'Like/Dislike Accommodation',
  },
];

describe('<ActionsMenu />', () => {
  afterEach(() => cleanup);

  it('Should match the ActionsMenu snapshot', () => {
    const component = createMount()(
      <ActionsMenu actions={actions} />,
    );
    expect(component.html).toMatchSnapshot();
  });
});

describe('<ActionsMenu /> onClick()', () => {
  afterEach(() => cleanup);

  it('Calls the onClick handler to open', () => {
    const mockedHandleClick = jest.fn();
    const component = createMount()(
      <ActionsMenu actions={actions} />,
    );
    component.find(Button).first().props().onClick = mockedHandleClick;
    component.find(Button).first().props().onClick();

    expect(mockedHandleClick).toHaveBeenCalledTimes(1);
  });
});
