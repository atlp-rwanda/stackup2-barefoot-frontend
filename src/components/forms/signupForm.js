import React, { Component } from 'react';
import NavBar from '../../views/navBar';

class SignupComponent extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="signup-component">
          <NavBar />
          <div className="signup-form">
            <h3>Join us today!</h3>
            <div className="input-group names-div">
              <input className="inputs" type="text" placeholder="First name" />
              <input className="inputs lname-input" type="text" placeholder="Last name" />
            </div>
            <div className="input-group">
              <input className="inputs" type="email" placeholder="Email" />
            </div>
            <div className="input-group">
              <input className="inputs" type="text" placeholder="Address (city)" />
            </div>
            <div className="input-group">
              <input className="inputs" type="text" placeholder="Gender" />
            </div>
            <div className="input-group">
              <input className="inputs" type="text" placeholder="Username" />
            </div>
            <div className="input-group">
              <input className="inputs" type="password" placeholder="Password" />
            </div>
            <div className="input-group">
              <button className="inputs signup-button" type="button">Create account</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SignupComponent;
