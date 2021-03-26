import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "./style";

const CustomButton = ({ children, icon, ...rest }) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      variant="contained"
      color="primary"
      endIcon={icon}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
