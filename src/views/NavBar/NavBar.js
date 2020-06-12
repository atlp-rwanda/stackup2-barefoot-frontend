import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navlink: {
    color: theme.palette.primary.main,
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className="navbar">
        <Toolbar className="navbar-content">
          <div className="brand">
            <h2 className="brand-barefoot">Barefoot</h2>
            <h2 className="brand-nomad">Nomad</h2>
          </div>
          <div className="brand">
            <Link component={RouterLink} to="/login" color="primary" className="navlink">Login</Link>
            <Link href="/signup" color="textPrimary" className="navlink navlink-signup">Create account</Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
