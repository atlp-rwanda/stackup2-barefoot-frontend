import React from 'react';
import LandingPage from '../src/views/LandingPage/LandingPage';

export default {
  title: 'Hello Component',
  components: [LandingPage],
};

export const HelloStory = () => (<LandingPage />);
