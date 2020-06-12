/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { cleanup } from '@testing-library/react';
import NavBar from '../views/NavBar/NavBar';

describe('<NavBar/>', () => {
  afterEach(cleanup);
  it('Should match the NavBar component snapshot', () => {
    const tree = renderer.create(<Router><NavBar /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
