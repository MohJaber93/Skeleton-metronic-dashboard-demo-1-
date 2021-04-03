import React from "react";
import { MenuItem, TextField } from "@material-ui/core";

const CustomSelect = ({ data, ...rest }) => {
  return (
    <TextField variant="outlined" size="small" select {...rest}>
      {Object.keys(data).map(status => (
        <MenuItem key={status} value={data[status]}>
          {data[status]}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default CustomSelect;
