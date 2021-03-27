import React from "react";
import { Grid, InputAdornment, IconButton, Tooltip } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import CustomInput from "../CustomInput";
import CustomSelect from "../CustomSelect";
import CustomButton from "../CustomButton";
import { ORDERS_STATUS } from "app/constants";
import { useStyles } from "./style";

const OrdersFilterControls = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item md={3} sm={3} xs={12}>
        <CustomInput
          type="number"
          placeholder="رقم الطلب"
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
      <Grid item md={2} sm={3} xs={12}>
        <CustomSelect data={ORDERS_STATUS} fullWidth />
      </Grid>
      <Grid item md={2} sm={3} xs={12}>
        <CustomInput
          label="من تاريخ"
          type="date"
          InputLabelProps={{
            shrink: true
          }}
        />
      </Grid>
      <Grid item md={2} sm={3} xs={12}>
        <CustomInput
          label="الى تاريخ"
          type="date"
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
        md={3}
      >
        <CustomButton size="small" icon={<SearchIcon />}>
          ابحث
        </CustomButton>
        <Tooltip title="اعادة تعيين فلتر البحث">
          <IconButton>
            <RotateLeftIcon color="error" />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default OrdersFilterControls;
