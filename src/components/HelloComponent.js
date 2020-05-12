import React, { Component } from 'react';
import customMessage from '../utils/customMessages';

class HelloComponent extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <h1>
        {customMessage.welcomeToBarefootNomad}
      </h1>
    );
  }
}

export default HelloComponent;
