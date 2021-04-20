import React, { useEffect, useState, useMemo } from "react";
import { Box } from "@material-ui/core";
import UsersFilterControls from "_metronic/layout/components/UsersFilterControls";
import RoundedCards from "_metronic/layout/components/RoundedCards";
import CustomTable from "_metronic/layout/components/CustomTable";
import Snackbar from "_metronic/layout/components/CustomSnackbar";
import { getUsers } from "api/Users";
import { API_COMMON_STATUS } from "helpers/api-helper";

const initailUserDataState = {
  sellersNumber: 0,
  totalNumber: 0,
  users: [],
  usersNumber: 0
};
const Users = () => {
  const [usersData, setUsersData] = useState(initailUserDataState);
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
    setUsersData({});
    getUsers(query)
      .then(response => {
        console.log("test users data", response);
        if (response.responseStatus === API_COMMON_STATUS.SUCCESS) {
          setUsersData(response.users);
        } else {
          setHasError(true);
          setUsersData(initailUserDataState);
        }
      })
      .catch(error => {
        setUsersData(initailUserDataState);
        setHasError(true);
        console.log(error);
        console.error(error);
      });
  };

  const updateOrdersQuery = filterData => {
    const { userName, userType } = filterData;
    let filterQuery = "";
    if (userName) {
      filterQuery = `name=${userName}`;
    }

    if (userType !== "الكل") {
      filterQuery = filterQuery
        ? `${filterQuery}&type=${userType}`
        : `type=${userType}`;
    }

    console.log("test users data", filterData, filterQuery);
    setQuery(filterQuery);
  };

  const resetFilterOrdersData = () => {
    setQuery("");
  };

  const CARDS_DATA = useMemo(
    () => [
      {
        title: "عدد البائعين",
        value: usersData?.sellersNumber,
        className: "acceptedCard",
        id: 1
      },
      {
        title: "الرقم الاجمالي",
        value: usersData?.totalNumber,
        className: "totalCard",
        id: 2
      },
      {
        title: "عدد المستخدمين",
        value: usersData?.usersNumber,
        className: "deliveredCard",
        id: 3
      }
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [usersData]
  );

  return (
    <Box height="100%" style={{ backgroundColor: "#fff", padding: "5px" }}>
      <UsersFilterControls
        onSearchClicked={updateOrdersQuery}
        onResetClicked={resetFilterOrdersData}
      />
      <RoundedCards data={CARDS_DATA} users />
      <CustomTable
        data={usersData.users}
        updateTableData={() => updateTableData(query)}
        usersTable
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

export default Users;
