import React from "react";
import { TextField } from "@material-ui/core";

const CustomInput = ({ size = "small", ...rest }) => {
  return <TextField fullWidth variant="outlined" size={size} {...rest} />;
};

export default CustomInput;
