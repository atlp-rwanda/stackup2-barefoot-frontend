import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Help from '@material-ui/icons/Help';

const useStyles = makeStyles({
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    minHeight: 544,
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  profileSection: {
    width: '100%',
    border: '1px solid #00A799',
    padding: 12,
  },
  userIconWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  userIcon: {
    fontSize: 72,
  },
  username: {
    color: '#484848',
    fontSize: 14,
    fontWeight: 700,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    color: '#00A799',
    fontSize: 12,
    fontWeight: 700,
  },
  text: {
    color: '#484848',
    fontSize: 12,
  },
  linkWrapper: {
    textAlign: 'right',
  },
  link: {
    color: '#00A799',
    fontSize: 12,
    textAlign: 'right',
    marginBottom: 6,
  },
  helpSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  helpIcon: {
    fontSize: 18,
    marginRight: 6,
  },
});

const userPreferences = [
  {
    id: 1,
    label: 'Email',
    value: 'username@barefoot.com',
  },
  {
    id: 2,
    label: 'DOB',
    value: '12-24-1986',
  },
  {
    id: 3,
    label: 'Position',
    value: 'Senior Software Engineer',
  },
  {
    id: 4,
    label: 'Currency',
    value: 'USD',
  },
  {
    id: 5,
    label: 'Language',
    value: 'English',
  },
];

const UserProfileCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.profileSection}>
        <div className={classes.userIconWrapper}>
          <AccountCircle className={classes.userIcon} htmlColor="#555555" />
          <div className={classes.username}>Username</div>
        </div>
        {
          userPreferences.map((item) => (
            <div className={classes.row} key={item.id}>
              <span className={classes.label}>{item.label}</span>
              <span className={classes.text}>{item.value}</span>
            </div>
          ))
        }
        <div className={classes.linkWrapper}>
          <Link className={classes.link} href="/">Edit profile</Link>
        </div>
      </div>
      <div className={classes.helpSection}>
        <Help className={classes.helpIcon} htmlColor="#00A799" />
        <Link className={classes.text} href="/">Help &#38; Support</Link>
      </div>
    </div>
  );
};

export default UserProfileCard;
