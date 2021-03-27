import React from "react";
import { Typography, Grid } from "@material-ui/core";
import CustomCard from "../CustomCard";
import { useStyles } from "./style";

const OrdersCards = () => {
  const classes = useStyles();
  return (
    <CustomCard styleClass={classes.cardsSection}>
      <CustomCard>
        <CustomCard>
          <Grid container>
            <Grid
              item
              container
              direction="column"
              justify="space-between"
              alignItems="center"
              xs={6}
              md={3}
            >
              <CustomCard className={`${classes.card} ${classes.pendingCard}`}>
                100
              </CustomCard>
              <Typography variant="h6">الطلبات المعلقة</Typography>
            </Grid>
            <Grid
              item
              container
              direction="column"
              justify="space-between"
              alignItems="center"
              xs={6}
              md={3}
            >
              <CustomCard
                className={`${classes.card} ${classes.deliveredCard}`}
              >
                2
              </CustomCard>
              <Typography variant="h6">الطلبات المستلمة</Typography>
            </Grid>
            <Grid
              item
              container
              direction="column"
              justify="space-between"
              alignItems="center"
              xs={6}
              md={3}
            >
              <CustomCard className={`${classes.card} ${classes.rejectedCard}`}>
                3
              </CustomCard>
              <Typography variant="h6">الطلبات المرفوضة</Typography>
            </Grid>
            <Grid
              item
              container
              direction="column"
              justify="space-between"
              alignItems="center"
              xs={6}
              md={3}
            >
              <CustomCard className={`${classes.card} ${classes.totalCard}`}>
                4
              </CustomCard>
              <Typography variant="h6">كل الطلبات</Typography>
            </Grid>
          </Grid>
        </CustomCard>
      </CustomCard>
    </CustomCard>
  );
};

export default OrdersCards;
