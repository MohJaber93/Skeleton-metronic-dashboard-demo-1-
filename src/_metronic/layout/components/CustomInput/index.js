import React from "react";
import { TextField } from "@material-ui/core";

const CustomInput = ({ ...rest }) => {
  return <TextField fullWidth variant="outlined" size="small" {...rest} />;
};

export default CustomInput;
