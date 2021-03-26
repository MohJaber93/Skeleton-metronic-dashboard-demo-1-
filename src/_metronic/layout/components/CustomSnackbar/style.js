import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles(theme => ({
  alert: {
    "&.MuiAlert-filledError": {
      backgroundColor: "red"
    },
    "& > .MuiAlert-icon": {
      margin: 0,
      marginLeft: "12px"
    },
    "& > .MuiAlert-action": {
      margin: 0,
      padding: 0,
      marginRight: "12px"
    },
    "& > .MuiAlert-message": {
      padding: "11px 0"
    }
  }
}));
