/* eslint-disable no-undef */
import { mount } from 'enzyme';
import React from 'react';
import 'regenerator-runtime/runtime';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TextField from '@material-ui/core/TextField';
import Login, {
  mapDispatchToProps,
  mapStateToProps,
} from '../../components/forms/UserLogin';
import InputField from '../../components/forms/InputField';
import Lines from '../../components/forms/Lines';
import Links from '../../components/forms/Link';
import SubmitButton from '../../components/forms/SubmitButton';
import SocialLogin from '../../components/forms/SocialLogin';

const defaultProps = {
  errors: '',
  success: false,
  token: '',
};
const mockStore = configureStore([]);
const store = mockStore({
  message: 'Welcome',
  errors: '',
  success: false,
  token: '',
});
store.dispatch = jest.fn();

describe('App tests', () => {
  it('rendering the user login component', () => {
    const submit = jest.fn();
    const change = jest.fn();
    const chi = 'forget Password?';
    const login = mount(<Provider store={store}><Login /></Provider>);
    expect(login.contains(
      <InputField name="email" handleLoginChange={change} />,
      <SubmitButton submitForm={submit}>Login</SubmitButton>,
      <Links>{chi}</Links>,
      <Lines />,
      <SocialLogin />,
    ));
  });
  it('login', () => {
    const event = {
      preventDefault() {},
      target: { value: 'example@gmail.com' },
    };
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).login();
    mapStateToProps({ defaultProps });
    const wrapper = mount(<Provider store={store}><Login /></Provider>);

    wrapper
      .find(TextField)
      .at(0)
      .simulate('change', event);
    wrapper
      .find(TextField)
      .at(1)
      .simulate('change', { target: { value: 'Example@2020' } });
    wrapper
      .find(SubmitButton)
      .simulate('click');
    expect(dispatch).toBeCalledTimes(1);
  });
});
