import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';

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
            <Link to="/" className="brand-link">
              <span className="brand-barefoot">Barefoot</span>
              <span className="brand-nomad">Nomad</span>
            </Link>
          </div>
          <div className="brand">
            <Link to="/" color="primary" className="navlink">Login</Link>
            <Link to="/dashboard/requests" color="textPrimary" className="navlink navlink-signup">Create account</Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
