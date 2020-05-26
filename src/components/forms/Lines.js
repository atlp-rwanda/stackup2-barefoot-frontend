import React from 'react';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  divider: {
    marginTop: '7%',
    backgroundColor: 'white',
  },
});
const Lines = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={5}>
        <Divider variant="middle" className={classes.divider} light />
      </Grid>
      <Grid item style={{ color: 'white' }}>
        OR
      </Grid>
      <Grid item xs={5}>
        <Divider variant="middle" className={classes.divider} />
      </Grid>
    </Grid>
  );
};

export default Lines;
