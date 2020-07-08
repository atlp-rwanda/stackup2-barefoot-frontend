import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const ToastNotification = ({ error }) => {
  const classes = useStyles();
  const [open] = useState(true);

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000}>
        <MuiAlert elevation={6} variant="filled" severity="error">
          {error}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

ToastNotification.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ToastNotification;
