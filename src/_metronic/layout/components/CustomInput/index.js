import React from "react";
import { TextField } from "@material-ui/core";

const CustomInput = ({ placeholder, ...rest }) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder={placeholder}
      size="small"
      {...rest}
    />
  );
};

export default CustomInput;
