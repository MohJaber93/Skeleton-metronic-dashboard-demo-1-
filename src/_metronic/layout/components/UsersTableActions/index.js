import React from "react";
import { Tooltip, IconButton } from "@material-ui/core";
import BlockIcon from "@material-ui/icons/Block";
import UpdateIcon from "@material-ui/icons/Update";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import UserFormDialog from "../UserFormDialog";
import { blockUser } from "api/Users";
import { API_COMMON_STATUS } from "helpers/api-helper";

const UsersTableActions = ({ user, updateSnackbarState }) => {
  const [openUserDialog, setOpenUserDialog] = React.useState(false);
  const [isBlocked, setIsBlocked] = React.useState(user.isBlocked);
  const userId = user.id;

  const handleClickOpenUserDialog = () => {
    setOpenUserDialog(true);
  };

  const handleCloseUserDialog = () => {
    setOpenUserDialog(false);
  };

  const blockUserHandler = () => {
    blockUser(userId)
      .then(response => {
        if (response.responseStatus === API_COMMON_STATUS.SUCCESS) {
          setIsBlocked(response.isBlocked);
          updateSnackbarState({
            open: true,
            message: response.message,
            variant: "success"
          });
        } else {
          updateSnackbarState({
            open: true,
            message: response.message,
            variant: "error"
          });
        }
      })
      .catch(error => {
        console.log(error);
        console.error(error);
      });
  };

  return (
    <>
      {openUserDialog && (
        <UserFormDialog
          open={openUserDialog}
          handleClose={handleCloseUserDialog}
          userData={user}
        />
      )}
      <Tooltip title="تحديث بيانات المستخدم">
        <IconButton color="primary" onClick={handleClickOpenUserDialog}>
          <UpdateIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title={isBlocked ? "رفع الحجب" : "حجب المتسخدم"}>
        <IconButton
          color={isBlocked ? "primary" : "secondary"}
          onClick={blockUserHandler}
        >
          {isBlocked ? <CheckCircleOutlineIcon /> : <BlockIcon />}
        </IconButton>
      </Tooltip>
    </>
  );
};

export default UsersTableActions;
