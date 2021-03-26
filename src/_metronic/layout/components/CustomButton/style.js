import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles(theme => ({
  button: {
    color: "#fff",
    fontSize: "1.2rem",
    fontWeight: "bold",
    "& > .MuiButton-label > .MuiButton-endIcon": {
      margin: 0,
      marginRight: "4px"
    }
  }
}));
