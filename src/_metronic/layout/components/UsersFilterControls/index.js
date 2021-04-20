import React from "react";
import {
  Grid,
  InputAdornment,
  IconButton,
  Tooltip,
  useMediaQuery,
  useTheme
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import CustomInput from "../CustomInput";
import CustomSelect from "../CustomSelect";
import CustomButton from "../CustomButton";
import UserFormDialog from "../UserFormDialog";
import { USERS_TYPE } from "app/constants";
import { useStyles } from "./style";

const initailFilterValue = {
  userName: "",
  userType: "الكل"
};
const UsersFilterControls = ({ onSearchClicked, onResetClicked }) => {
  const [filterData, setFilterData] = React.useState(initailFilterValue);
  const [openUserDialog, setOpenUserDialog] = React.useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  const handleClickOpenUserDialog = () => {
    setOpenUserDialog(true);
  };

  const handleCloseUserDialog = () => {
    setOpenUserDialog(false);
  };

  const changeHandler = event => {
    event.persist();
    setFilterData(prevFilterData => ({
      ...prevFilterData,
      [event.target.name]: event.target.value
    }));
  };

  const resetFilter = () => {
    onResetClicked();
    setFilterData(initailFilterValue);
  };

  return (
    <Grid container spacing={2} className={classes.ordersFilterContainer}>
      <Grid item sm={3} xs={12}>
        <CustomInput
          placeholder="اسم المستخدم"
          name="userName"
          value={filterData.userName}
          onChange={changeHandler}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  size="small"
                  onClick={() => onSearchClicked(filterData)}
                >
                  <SearchIcon color="secondary" />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Grid>
      <Grid item sm={2} xs={12}>
        <CustomSelect
          data={USERS_TYPE}
          name="userType"
          value={filterData.userType}
          onChange={changeHandler}
          fullWidth
          label="نوع المتسخدم"
        />
      </Grid>
      <Grid
        item
        container
        spacing={3}
        justify="space-evenly"
        alignItems="center"
        xs={12}
        sm={3}
      >
        <CustomButton
          size="small"
          icon={<SearchIcon />}
          onClick={() => onSearchClicked(filterData)}
        >
          ابحث
        </CustomButton>
        <Tooltip title="اعادة تعيين فلتر البحث">
          <IconButton onClick={resetFilter}>
            <RotateLeftIcon color="error" />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid
        item
        container
        justify={matches ? "center" : "flex-end"}
        alignItems="center"
        sm={4}
        xs={12}
      >
        <CustomButton
          size="small"
          icon={<PersonAddIcon />}
          onClick={handleClickOpenUserDialog}
        >
          اضافة مستخدم
        </CustomButton>
        {openUserDialog && (
          <UserFormDialog
            open={openUserDialog}
            handleClose={handleCloseUserDialog}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default UsersFilterControls;
