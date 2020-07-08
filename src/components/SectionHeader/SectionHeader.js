import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  title: {
    color: '#484848',
    backgroundColor: '#00a7990f',
    padding: 24,
    fontSize: 14,
    fontFamily: 'Roboto',
    fontWeight: 500,
  },
});

const SectionHeader = ({ title }) => {
  const classes = useStyles();

  return (
    <Typography className={classes.title}>
      {title}
    </Typography>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
