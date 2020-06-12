import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  textField: {
    marginBottom: '7%',
    marginTop: '1%',
    '& div': {
      borderRadius: 18,
    },
  },
  input: {
    color: 'black',
    backgroundColor: 'white',
  },
});

const InputField = ({ handleLoginChange, name }) => {
  const classes = useStyles();
  return (
    <TextField
      variant="outlined"
      required
      fullWidth
      id={name}
      label={name}
      name={name}
      type={name}
      className={classes.textField}
      InputProps={{
        className: classes.input,
      }}
      size="small"
      onChange={handleLoginChange}
    />
  );
};
InputField.propTypes = {
  name: PropTypes.string.isRequired,
  handleLoginChange: PropTypes.func.isRequired,
};
export default InputField;
