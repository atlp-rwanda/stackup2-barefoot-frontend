/* eslint-disable no-undef */
import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import { cleanup } from '@testing-library/react';
import ToastNotification from '../ToastNotification';

const error = 'Some error message';

describe('<ToastNotification />', () => {
  afterEach(() => cleanup);

  it('Should match the ToastNotification snapshot', () => {
    const component = createMount()(
      <ToastNotification error={error} />,
    );
    expect(component.html).toMatchSnapshot();
  });
});

// /* eslint-disable no-undef */
// import React from 'react';
// import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';
// import { cleanup } from '@testing-library/react';
// import ToastNotification from '../ToastNotification';

// const error = 'Some error message';

// describe('<ToastNotification/>', () => {
//   afterEach(() => cleanup);

//   it('Should render the SectionHeader component', () => {
//     const tree = shallow(<ToastNotification error={error} />);
//     expect(tree.find('Snackbar').exists()).toBe(true);
//     expect(tree.find('MuiAlert').exists()).toBe(true);
//   });
// });
