import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Remove from '@material-ui/icons/Remove';
import PropTypes, { string } from 'prop-types';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.primary.dark,
  },
}));

const CustomCard = ({ title, items }) => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className="card">
      <div className="card-title">{title}</div>
      <div className="testimony-bar mb24">
        <Remove className={classes.icon} size={32} />
      </div>
      <div className="card-items">
        {
          items.map((item, index) => <Link className="card-item" href="/" key={index}>{item}</Link>)
        }
      </div>
    </Paper>
  );
};

CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(string).isRequired,
};

export default CustomCard;
