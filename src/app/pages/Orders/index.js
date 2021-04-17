import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import OrdersFilterControls from "_metronic/layout/components/OrdersFilterControls";
import OrdersCards from "_metronic/layout/components/OrdersCards";
import OrdersTable from "_metronic/layout/components/OrdersTable";
import Snackbar from "_metronic/layout/components/CustomSnackbar";
import { getOrders } from "api/Orders";
import { API_COMMON_STATUS } from "helpers/api-helper";

const Orders = () => {
  const [ordersData, setOrdersData] = useState({});
  const [hasError, setHasError] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    updateTableData(query);
  }, [query]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setHasError(null);
  };

  const updateTableData = query => {
    setOrdersData({});
    getOrders(query)
      .then(response => {
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
  };

  const updateOrdersQuery = filterData => {
    const {
      orderNumber,
      deliveryMethod,
      orderStatus,
      startDate,
      endDate
    } = filterData;
    let filterQuery = "";
    if (orderNumber) {
      filterQuery = `order_number=${orderNumber}`;
    }

    if (deliveryMethod !== "الكل") {
      filterQuery = filterQuery
        ? `${filterQuery}&delivery_method=${deliveryMethod}`
        : `delivery_method=${deliveryMethod}`;
    }

    if (orderStatus !== "الكل") {
      filterQuery = filterQuery
        ? `${filterQuery}&status=${orderStatus}`
        : `status=${orderStatus}`;
    }

    if (startDate && endDate) {
      const startDateWantedFormat = startDate.replaceAll("-", "/");
      const endDateWantedFormat = endDate.replaceAll("-", "/");
      filterQuery = filterQuery
        ? `${filterQuery}&start=${startDateWantedFormat}&end=${endDateWantedFormat}`
        : `start=${startDateWantedFormat}&end=${endDateWantedFormat}`;
    }
    setQuery(filterQuery);
  };

  const resetFilterOrdersData = () => {
    setQuery("");
  };

  return (
    <Box height="100%" style={{ backgroundColor: "#fff", padding: "5px" }}>
      <OrdersFilterControls
        onSearchClicked={updateOrdersQuery}
        onResetClicked={resetFilterOrdersData}
      />
      <OrdersCards data={ordersData?.orders} />
      <OrdersTable
        data={ordersData?.orders?.orders}
        updateTableData={() => updateTableData(query)}
      />
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
