import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";

import SummarySection from "../../_metronic/layout/components/SummarySection";
import SummaryDetails from "../../_metronic/layout/components/SummaryDetails";

export function DashboardPage() {
  return (
    <Box height="100%">
      <SummarySection />
      <SummaryDetails />
    </Box>
  );
}
