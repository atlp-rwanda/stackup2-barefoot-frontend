import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import customMessage from '../utils/customMessages';
import firstMessage from '../actions/actions';

class HelloComponent extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { message, displayMessage } = this.props;

    return (
      <div>
        <h1>
          {customMessage.welcomeToBarefootNomad}
        </h1>
        <h2>{message}</h2>
        <button type="button" onClick={displayMessage}>
          try redux
        </button>
        <ul>
          <li><Link to="/login">Login</Link></li>
        </ul>
        <Link to="/signup">Signup</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  message: state.message,
});

const mapDispatchToProps = (dispatch) => ({
  displayMessage: () => dispatch({ ...firstMessage, value: 'Redux is working !!!' }),
});

HelloComponent.propTypes = {
  message: PropTypes.string.isRequired,
  displayMessage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HelloComponent);
