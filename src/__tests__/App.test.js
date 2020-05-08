/* eslint-disable no-undef */
import { mount, shallow } from 'enzyme';
import React from 'react';
import customMessage from '../utils/customMessages';
import App from '../entry/App';
import HelloComponent from '../components/HelloComponent';

describe('App tests', () => {
  it('Will prove that the app is rendered from App component', () => {
    const appRender = shallow(<App />);
    expect(appRender.contains(<HelloComponent />));
  });

  it('Will show the home page', () => {
    const homePage = mount(<HelloComponent />);
    expect(homePage.text()).toEqual(customMessage.welcomeToBarefootNomad);
  });
});
