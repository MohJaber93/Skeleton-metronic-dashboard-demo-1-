import React from "react";
import { Grid, Typography } from "@material-ui/core";
import SummaryTable from "../SummaryTable";
import { useStyles } from "./style";

const SummaryDetails = ({ homeDetails }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.summaryDetailsContainer}>
      <Grid item sm={6} style={{ padding: "5px", width: "100%" }}>
        <Typography variant="h5" gutterBottom>
          اليوم
        </Typography>
        <Typography variant="h5" gutterBottom>
          {new Date().toDateString()}
        </Typography>
        <SummaryTable data={homeDetails.todaySummary} />
      </Grid>
      <Grid item sm={6} style={{ padding: "5px", width: "100%" }}>
        <Typography variant="h5" gutterBottom>
          هذا الأسبوع
        </Typography>
        <Typography variant="h5" gutterBottom>
          {new Date().toDateString()}
        </Typography>
        <SummaryTable data={homeDetails.weeklySummary} weekly />
      </Grid>
    </Grid>
  );
};

export default SummaryDetails;
