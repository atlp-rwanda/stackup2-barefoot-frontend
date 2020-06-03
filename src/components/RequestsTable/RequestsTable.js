import React from 'react';
import PropTypes, { object } from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import RemoveCircleOutline from '@material-ui/icons/RemoveCircleOutline';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import ActionsMenu from '../../views/ActionsMenu/ActionsMenu';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.secondary.contrastText,
    color: theme.palette.primary.dark,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  tableCell: {
    fontSize: 12,
  },
  tableIcons: {
    fontSize: 16,
  },
  noData: {
    fontSize: 14,
    color: '#777777',
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
  },
});

const requesterActions = [
  {
    id: 1,
    name: 'Edit',
  },
  {
    id: 2,
    name: 'Book Accommodation',
  },
  {
    id: 3,
    name: 'Rate Accommodation',
  },
  {
    id: 4,
    name: 'Like/Dislike Accommodation',
  },
];

const RequestsTable = ({ requests }) => {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className={classes.tableCell}>Date</StyledTableCell>
            <StyledTableCell className={classes.tableCell} align="left">Departure</StyledTableCell>
            <StyledTableCell className={classes.tableCell} align="left">Destination</StyledTableCell>
            <StyledTableCell className={classes.tableCell} align="left">Reason</StyledTableCell>
            <StyledTableCell className={classes.tableCell} align="left">Accommodation</StyledTableCell>
            <StyledTableCell className={classes.tableCell} align="center">Status</StyledTableCell>
            <StyledTableCell className={classes.tableCell} align="center" />
          </TableRow>
        </TableHead>
        <TableBody>
          {requests.length > 0 ? (requests.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell className={classes.tableCell} component="th" scope="row">
                {row.trips[0].travelDate}
              </StyledTableCell>
              <StyledTableCell className={classes.tableCell} align="left">{row.trips[0].travelFrom}</StyledTableCell>
              <StyledTableCell className={classes.tableCell} align="left">{row.trips[0].travelTo}</StyledTableCell>
              <StyledTableCell className={classes.tableCell} align="left">{row.travelReason}</StyledTableCell>
              <StyledTableCell className={classes.tableCell} align="left">{row.accommodation ? 'Yes' : 'No'}</StyledTableCell>
              <StyledTableCell className={classes.tableCell} align="center">
                {row.status === 'pending' ? <RemoveCircleOutline className={classes.tableIcons} htmlColor="#DADADA" /> : <CheckCircleOutline className={classes.tableIcons} htmlColor="#00A799" />}
              </StyledTableCell>
              <StyledTableCell align="center">
                <ActionsMenu actions={requesterActions} />
              </StyledTableCell>
            </StyledTableRow>
          ))
          ) : (
            <StyledTableRow>
              <StyledTableCell className={classes.noData} component="th" scope="row" align="center" colSpan={7}>
                Oops! Looks like you have not yet made any requests.
              </StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

RequestsTable.propTypes = {
  requests: PropTypes.arrayOf(object).isRequired,
};

export default RequestsTable;
