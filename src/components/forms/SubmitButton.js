import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  textField: {
    marginBottom: '7%',
    marginTop: '1%',
    textTransform: 'none',
    borderRadius: 15,
  },
});
const SubmitButton = ({ submitForm, children }) => {
  const classes = useStyles();
  return (
    <Button
      onClick={submitForm}
      variant="contained"
      color="secondary"
      id="submit"
      className={classes.textField}
      style={{ backgroundColor: '#FF585B' }}
      fullWidth
    >
      {children}
    </Button>
  );
};
SubmitButton.propTypes = {
  children: PropTypes.string.isRequired,
  submitForm: PropTypes.func.isRequired,
};
export default SubmitButton;
