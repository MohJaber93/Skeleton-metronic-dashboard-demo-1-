import React from "react";
import { Box, Grid } from "@material-ui/core";
import OrdersFilterControls from "_metronic/layout/components/OrdersFilterControls";

const Orders = () => {
  return (
    <Box height="100%" style={{ backgroundColor: "#fff", padding: "5px" }}>
      <OrdersFilterControls />
      {/* My Page */}
    </Box>
  );
};

export default Orders;
