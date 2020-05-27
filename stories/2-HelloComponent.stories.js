import React from 'react';
import HelloComponent from '../src/components/HelloComponent';

export default {
  title: 'Hello Component',
  components: [HelloComponent],
};

export const HelloStory = () => (<HelloComponent />);
