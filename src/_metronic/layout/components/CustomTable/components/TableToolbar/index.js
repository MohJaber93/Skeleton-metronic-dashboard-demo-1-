import React from "react";
import PropTypes from "prop-types";
import { Toolbar, Typography } from "@material-ui/core";
import clsx from "clsx";
import { useStyles } from "./style";
import CountUpdater from "_metronic/layout/components/CountUpdater";
// import DeleteIcon from "@material-ui/icons/Delete";

const TableToolbar = props => {
  const classes = useStyles();
  const { numSelected, updateTableData } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="h6">
          {numSelected} طلب محدد
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h5">
          الطلبات
        </Typography>
      )}

      {/* {numSelected > 0 && (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      )} */}
      <CountUpdater startNumber={60} onCounterFinished={updateTableData} />
    </Toolbar>
  );
};

TableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
};

export default TableToolbar;
