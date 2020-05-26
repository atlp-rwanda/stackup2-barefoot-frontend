import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import Links from './Link';
import Lines from './Lines';
import SocialLogin from './SocialLogin';
import handleLogin from '../../redux/login/loginActions';

const useStyles = () => ({
  root: {
    backgroundColor: 'rgba(0, 167, 153, 0.15)',
    width: '24%',
    margin: '4% 38%',
    padding: '1% 3%',
    boxSizing: 'border-box',
    borderRadius: 15,
    '@media (max-width: 500px)': {
      width: '80%',
      margin: '4% 10%',
    },
  },
});
export class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleLoginChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  submitForm = async (event) => {
    const { login } = this.props;
    const { email, password } = this.state;
    event.preventDefault();
    const user = {
      email,
      password,
    };
    login(user);
  }

  render() {
    const { classes } = this.props;
    const { success, errors } = this.props;
    if (success === true) {
      return <Redirect to="/" />;
    }
    return (
      <div className="main">
        <div className={classes.root}>
          <h1>Login</h1>
          <form>
            <InputField name="email" handleLoginChange={this.handleLoginChange} />
            <InputField name="password" handleLoginChange={this.handleLoginChange} />
            <SubmitButton submitForm={this.submitForm}>Login</SubmitButton>
            <span className="span">{errors}</span>
            <Links>Forgot password?</Links>
            <Links>
              Don&apos;t have an account?
              <span className="span">Sign Up</span>
            </Links>
            <Lines />
            <SocialLogin />
          </form>
        </div>
      </div>

    );
  }
}
export const mapStateToProps = (state) => ({
  errors: state.errors,
  success: state.success,
});
export const mapDispatchToProps = (dispatch) => ({
  login: (credentials) => dispatch(handleLogin(credentials)),
});
UserLogin.propTypes = {
  login: PropTypes.func.isRequired,
  success: PropTypes.bool,
  errors: PropTypes.string,
  classes: PropTypes.instanceOf(Object).isRequired,
};
UserLogin.defaultProps = {
  success: PropTypes.bool,
  errors: PropTypes.string,

};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(UserLogin));
