import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.primary.dark,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className="footer">
      <div className="socials mb24">
        <Link href="/">
          <Instagram size={18} className={classes.icon} />
        </Link>
        <Link href="/">
          <Facebook size={18} className={classes.icon} />
        </Link>
        <Link href="/">
          <Twitter size={18} className={classes.icon} />
        </Link>
      </div>
      <div className="copyright">
        <span className="rights">&copy; 2020 Barefoot Nomad. All rights reserved</span>
        <span className="rights hide">&bull;</span>
        <Link className="rights" href="/">Terms</Link>
        <span className="rights hide">&bull;</span>
        <Link className="rights" href="/">Privacy</Link>
      </div>
    </div>
  );
};

export default Footer;
