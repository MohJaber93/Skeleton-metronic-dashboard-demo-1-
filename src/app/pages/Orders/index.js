import React, { useEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";
import OrdersFilterControls from "_metronic/layout/components/OrdersFilterControls";
import OrdersCards from "_metronic/layout/components/OrdersCards";
import Snackbar from "_metronic/layout/components/CustomSnackbar";
import { getOrders } from "api/Orders";
import { API_COMMON_STATUS } from "helpers/api-helper";

const Orders = () => {
  const [ordersData, setOrdersData] = useState({});
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    getOrders(token)
      .then(response => {
        console.log(response, "orders res");
        if (response.responseStatus === API_COMMON_STATUS.SUCCESS) {
          setOrdersData(response);
        } else if (response.responseStatus === API_COMMON_STATUS.UNAUTHORIZED) {
          setHasError(true);
        }
      })
      .catch(error => {
        console.log(error);
        console.error(error);
      });
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setHasError(null);
  };

  return (
    <Box height="100%" style={{ backgroundColor: "#fff", padding: "5px" }}>
      <OrdersFilterControls />
      {/* My Page */}
      <OrdersCards data={ordersData} />
      <Snackbar
        open={!!hasError}
        handleClose={handleClose}
        type="error"
        text="حدث خطأ ما يرجى المحاولة مرة اخرى"
      />
    </Box>
  );
};

export default Orders;
