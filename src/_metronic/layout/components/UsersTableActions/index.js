import React from "react";
import { Tooltip, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import BlockIcon from "@material-ui/icons/Block";
import UpdateIcon from "@material-ui/icons/Update";

const UsersTableActions = () => {
  return (
    <>
      <Tooltip title="تحديث بيانات المستخدم">
        <IconButton
          color="primary"
          //   onClick={updateTableData}
        >
          <UpdateIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="حجب المتسخدم">
        <IconButton
        //   onClick={updateTableData}
        >
          <BlockIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="حذف المتسخدم">
        <IconButton
          color="secondary"
          //   onClick={updateTableData}
        >
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default UsersTableActions;
