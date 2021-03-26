import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";

import { getHomeSummary } from "api/Users";
import { API_COMMON_STATUS } from "helpers/api-helper";
import SummarySection from "../../_metronic/layout/components/SummarySection";
import SummaryDetails from "../../_metronic/layout/components/SummaryDetails";

export function DashboardPage() {
  const [homeDetails, setHomeDetails] = useState({});
  const [hasError, setHasError] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    getHomeSummary(token)
      .then(response => {
        console.log(response);
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
    </>
  );
}
