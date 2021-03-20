import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  TableCell,
  TableRow,
  withStyles,
  createStyles
} from "@material-ui/core";
export const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 300
  }
}));

export const StyledTableCell = withStyles(theme =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    body: {
      fontSize: 14
    }
  })
)(TableCell);

export const StyledTableRow = withStyles(theme =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover
      }
    }
  })
)(TableRow);
