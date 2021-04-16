import React, { useMemo } from "react";
import { Typography, Grid, CircularProgress } from "@material-ui/core";
import CustomCard from "../CustomCard";
import { useStyles } from "./style";

const OrdersCards = ({ data }) => {
  const classes = useStyles();

  const CARDS_DATA = useMemo(
    () => [
      {
        title: "الطلبات المعلقة",
        value: data?.pendingOrders,
        className: classes.pendingCard,
        id: 1
      },
      {
        title: "الطلبات المقبولة",
        value: data?.acceptedOrders,
        className: classes.acceptedCard,
        id: 2
      },
      {
        title: "الطلبات المستلمة",
        value: data?.deliveredOrders,
        className: classes.deliveredCard,
        id: 3
      },
      {
        title: "الطلبات المرفوضة",
        value: data?.rejectedOrders,
        className: classes.rejectedCard,
        id: 4
      },
      {
        title: "طلبات أخرى",
        value: data?.othersOrder,
        className: classes.othersCard,
        id: 5
      },
      {
        title: "كل الطلبات",
        value: data?.totalOrders,
        className: classes.totalCard,
        id: 6
      }
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data]
  );

  const renderCardValue = value =>
    value || value === 0 ? value : <CircularProgress size={30} />;

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
                key={card.id}
              >
                <CustomCard className={`${classes.card} ${card.className}`}>
                  <Typography variant="h5">
                    {renderCardValue(card.value)}
                  </Typography>
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
