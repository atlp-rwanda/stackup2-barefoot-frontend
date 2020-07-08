import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes, { array } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import UserProfileCard from '../UserProfileCard/UserProfileCard';
import RequestsTable from '../../components/RequestsTable/RequestsTable';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import ToastNotification from '../ToastNotification/ToastNotification';
import { fetchTripRequests } from '../../redux/tripRequests/tripRequestsActions';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#FFFFFF',
    minHeight: 544,
    boxShadow: 'none',
    padding: 14,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  content: {
    padding: 0,
    border: '1px solid #00a79926',
    width: '75%',
  },
  leftPane: {
    width: '20%',
    padding: 0,
    margin: 0,
    minHeight: 544,
  },
  loader: {
    backgroundColor: '#FFFFFF',
    minHeight: 544,
    boxShadow: 'none',
    padding: 14,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const RequestsTablePage = ({ requests, fetchTripRequests }) => {
  useEffect(() => {
    fetchTripRequests();
  }, []);

  const classes = useStyles();

  return requests.loading ? (
    <div className={classes.loader}>
      <LoadingSpinner />
    </div>
  )
    : requests.error ? (
      <div className={classes.root}>
        <ToastNotification error={requests.error} />
      </div>
    ) : (
      <Card className={classes.root}>
        <CardContent className={classes.leftPane}>
          <UserProfileCard />
        </CardContent>
        <CardContent className={classes.content}>
          <SectionHeader title="Trip requests" />
          <RequestsTable requests={requests.tripRequests} />
        </CardContent>
      </Card>
    );
};

RequestsTablePage.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  requests: PropTypes.objectOf(array).isRequired,
  fetchTripRequests: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  error: state.error,
  requests: state.tripRequests,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTripRequests: () => dispatch(fetchTripRequests()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RequestsTablePage);
