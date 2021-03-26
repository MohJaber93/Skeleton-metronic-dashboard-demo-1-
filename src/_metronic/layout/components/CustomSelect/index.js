import React from "react";
import { MenuItem, TextField } from "@material-ui/core";

const CustomSelect = ({ data, ...rest }) => {
  return (
    <TextField
      variant="outlined"
      size="small"
      select
      defaultValue="All"
      {...rest}
    >
      <MenuItem value="All">كل الطلبات</MenuItem>
      {Object.keys(data).map(status => (
        <MenuItem key={status} value={status}>
          {data[status]}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default CustomSelect;
