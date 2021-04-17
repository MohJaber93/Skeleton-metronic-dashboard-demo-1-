import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";

import { getHomeSummary } from "api/HomeSummary";
import { API_COMMON_STATUS } from "helpers/api-helper";
import SummarySection from "_metronic/layout/components/SummarySection";
import SummaryDetails from "_metronic/layout/components/SummaryDetails";
import Snackbar from "_metronic/layout/components/CustomSnackbar";

const DashboardPage = () => {
  const [homeDetails, setHomeDetails] = useState({});
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    getHomeSummary(token)
      .then(response => {
        if (response.responseStatus === API_COMMON_STATUS.SUCCESS) {
          setHomeDetails(response);
        } else if (response.responseStatus === API_COMMON_STATUS.UNAUTHORIZED) {
          // show no auth message response.message
          setHasError(true);
        }
      })
      .catch(error => {
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
    <>
      <Box height="100%">
        <SummarySection homeDetails={homeDetails} />
        <SummaryDetails homeDetails={homeDetails} />
      </Box>
      <Snackbar
        open={!!hasError}
        handleClose={handleClose}
        type="error"
        text="حدث خطأ ما يرجى المحاولة مرة اخرى"
      />
    </>
  );
};

export default DashboardPage;
