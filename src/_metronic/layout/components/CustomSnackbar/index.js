import React from "react";
import { Snackbar, Slide } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useStyles } from "./style";

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

const CustomSnackbar = ({ open, handleClose, type, text }) => {
  const classes = useStyles();

  return (
    <Snackbar
      open={open}
      message="I love snacks"
      TransitionComponent={TransitionUp}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={type}
        variant="filled"
        className={classes.alert}
      >
        {text}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
