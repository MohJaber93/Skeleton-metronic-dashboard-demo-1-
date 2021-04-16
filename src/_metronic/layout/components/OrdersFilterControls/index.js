import React from "react";
import { Grid, InputAdornment, IconButton, Tooltip } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import CustomInput from "../CustomInput";
import CustomSelect from "../CustomSelect";
import CustomButton from "../CustomButton";
import { ORDERS_STATUS, ORDERS_DELIVERY_METHOD } from "app/constants";
import { useStyles } from "./style";

const initailFilterValue = {
  orderNumber: "",
  deliveryMethod: "الكل",
  orderStatus: "الكل",
  startDate: "",
  endDate: ""
};
const OrdersFilterControls = ({ onSearchClicked, onResetClicked }) => {
  const [filterData, setFilterData] = React.useState(initailFilterValue);
  const classes = useStyles();

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
      <Grid item md={2} sm={4} xs={12}>
        <CustomInput
          type="number"
          placeholder="رقم الطلب"
          name="orderNumber"
          value={filterData.orderNumber}
          onChange={changeHandler}
          inputProps={{
            min: 1
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton size="small" onClick={() => console.log("search")}>
                  <SearchIcon color="secondary" />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Grid>
      <Grid item md={2} sm={4} xs={12}>
        <CustomSelect
          data={ORDERS_DELIVERY_METHOD}
          name="deliveryMethod"
          value={filterData.deliveryMethod}
          onChange={changeHandler}
          fullWidth
          label="طريقة التوصيل"
        />
      </Grid>
      <Grid item md={2} sm={4} xs={12}>
        <CustomSelect
          data={ORDERS_STATUS}
          name="orderStatus"
          value={filterData.orderStatus}
          onChange={changeHandler}
          fullWidth
          label="حالة الطلب"
        />
      </Grid>
      <Grid item md={2} sm={4} xs={12}>
        <CustomInput
          label="من تاريخ"
          type="date"
          name="startDate"
          value={filterData.startDate}
          onChange={changeHandler}
          InputLabelProps={{
            shrink: true
          }}
        />
      </Grid>
      <Grid item md={2} sm={4} xs={12}>
        <CustomInput
          label="الى تاريخ"
          type="date"
          name="endDate"
          value={filterData.endDate}
          onChange={changeHandler}
          InputLabelProps={{
            shrink: true
          }}
        />
      </Grid>
      <Grid
        item
        container
        spacing={3}
        justify="space-evenly"
        alignItems="center"
        xs={12}
        sm={4}
        md={2}
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
    </Grid>
  );
};

export default OrdersFilterControls;
