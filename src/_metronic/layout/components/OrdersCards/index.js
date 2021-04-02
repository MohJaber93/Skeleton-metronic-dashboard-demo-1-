import React, { useMemo } from "react";
import { Typography, Grid } from "@material-ui/core";
import CustomCard from "../CustomCard";
import { useStyles } from "./style";

const OrdersCards = ({ data }) => {
  const classes = useStyles();

  const CARDS_DATA = useMemo(
    () => [
      {
        title: "الطلبات المعلقة",
        value: data.pendingOrders,
        className: classes.pendingCard
      },
      {
        title: "الطلبات المقبولة",
        value: data.acceptedOrders,
        className: classes.acceptedCard
      },
      {
        title: "الطلبات المستلمة",
        value: data.deliveredOrders,
        className: classes.deliveredCard
      },
      {
        title: "الطلبات المرفوضة",
        value: data.rejectedOrders,
        className: classes.rejectedCard
      },
      {
        title: "طلبات أخرى",
        value: data.othersOrder,
        className: classes.othersCard
      },
      {
        title: "كل الطلبات",
        value: data.totalOrders,
        className: classes.totalCard
      }
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data]
  );

  return (
    <CustomCard styleClass={classes.cardsSection}>
      <CustomCard>
        <CustomCard>
          <Grid container>
            {CARDS_DATA.map(card => (
              <Grid
                item
                container
                direction="column"
                justify="space-between"
                alignItems="center"
                xs={4}
                md={2}
              >
                <CustomCard className={`${classes.card} ${card.className}`}>
                  <Typography variant="h5">{card.value}</Typography>
                </CustomCard>
                <Typography variant="h6">{card.title}</Typography>
              </Grid>
            ))}
          </Grid>
        </CustomCard>
      </CustomCard>
    </CustomCard>
  );
};

export default OrdersCards;
