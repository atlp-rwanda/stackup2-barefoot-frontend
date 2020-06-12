import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  link: {
    textAlign: 'center',
    margin: '5%',
  },
});
const Links = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.link}>
      <Link href="/" variant="body2" style={{ color: 'white', fontSize: '14px' }}>
        {children}
      </Link>
    </div>
  );
};
Links.propTypes = {
  children: PropTypes.string.isRequired,
};
export default Links;
