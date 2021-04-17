import React, { useEffect, useState, useMemo } from "react";
import { Box } from "@material-ui/core";
import OrdersFilterControls from "_metronic/layout/components/OrdersFilterControls";
import RoundedCards from "_metronic/layout/components/RoundedCards";
import CustomTable from "_metronic/layout/components/CustomTable";
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
          setOrdersData(response.orders);
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

  const CARDS_DATA = useMemo(
    () => [
      {
        title: "الطلبات المعلقة",
        value: ordersData?.pendingOrders,
        className: "pendingCard",
        id: 1
      },
      {
        title: "الطلبات المقبولة",
        value: ordersData?.acceptedOrders,
        className: "acceptedCard",
        id: 2
      },
      {
        title: "الطلبات المستلمة",
        value: ordersData?.deliveredOrders,
        className: "deliveredCard",
        id: 3
      },
      {
        title: "الطلبات المرفوضة",
        value: ordersData?.rejectedOrders,
        className: "rejectedCard",
        id: 4
      },
      {
        title: "طلبات أخرى",
        value: ordersData?.othersOrder,
        className: "othersCard",
        id: 5
      },
      {
        title: "كل الطلبات",
        value: ordersData?.totalOrders,
        className: "totalCard",
        id: 6
      }
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ordersData?.orders]
  );

  return (
    <Box height="100%" style={{ backgroundColor: "#fff", padding: "5px" }}>
      <OrdersFilterControls
        onSearchClicked={updateOrdersQuery}
        onResetClicked={resetFilterOrdersData}
      />
      <RoundedCards data={CARDS_DATA} />
      <CustomTable
        data={ordersData?.orders}
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
