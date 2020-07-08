import React from 'react';
import PropTypes, { object } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVert from '@material-ui/icons/MoreVert';

const useStyles = makeStyles({
  tableIcons: {
    fontSize: 16,
  },
  item: {
    fontSize: 12,
    color: '#484848',
  },
});

const ActionsMenu = ({ actions }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MoreVert className={classes.tableIcons} htmlColor="#00A799" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {
          actions.map((action) => (
            <MenuItem key={action.id} className={classes.item} onClick={handleClose}>
              {action.name}
            </MenuItem>
          ))
        }
      </Menu>
    </div>
  );
};

ActionsMenu.propTypes = {
  actions: PropTypes.arrayOf(object).isRequired,
};

export default ActionsMenu;
