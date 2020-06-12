import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import Aux from '../../hoc/Auxiliary/Auxiliary';

const useStyles = makeStyles({
  textField: {
    marginBottom: '7%',
    marginTop: '1%',
    textTransform: 'none',
    borderRadius: 15,
    color: 'white',
  },
});
const element = <FontAwesomeIcon icon={faGoogle} />;
const SocialLogin = () => {
  const classes = useStyles();
  return (
    <Aux>
      <Button
        variant="contained"
        style={{ backgroundColor: 'blue' }}
        className={classes.textField}
        startIcon={<FacebookIcon />}
        type="button"
        fullWidth
      >
        Login With Facebook
      </Button>
      <Button
        variant="contained"
        className={classes.textField}
        startIcon={element}
        type="button"
        style={{ backgroundColor: 'white', color: 'black' }}
        fullWidth
      >
        Login With Google
      </Button>
    </Aux>
  );
};

export default SocialLogin;
