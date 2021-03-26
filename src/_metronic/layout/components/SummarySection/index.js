import React, { useMemo } from "react";
import { Grid, Typography, CircularProgress } from "@material-ui/core";
import CustomCard from "../CustomCard";
import GroupIcon from "@material-ui/icons/Group";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import { useStyles } from "./style";

const SummarySection = ({ homeDetails }) => {
  const classes = useStyles();

  const CARDS_DATA = useMemo(
    () => [
      {
        title: "مجموع العملاء النشطين",
        value: homeDetails.totalUser,
        icon: GroupIcon,
        className: classes.firstCard
      },
      {
        title: "إجمالي الطلبات",
        value: homeDetails.totalOrders,
        icon: ShoppingCartIcon,
        className: classes.secondCard
      },
      {
        title: "مجموع المبيعات",
        value: homeDetails.totalSeller,
        icon: AttachMoneyIcon,
        className: classes.thirdCard
      },
      {
        title: "مجموع الأرباح",
        value: homeDetails.totalEarning,
        icon: LocalAtmIcon,
        className: classes.fourthCard
      }
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [homeDetails]
  );

  const renderCardValue = value =>
    value || value === 0 ? value : <CircularProgress size={30} />;

  return (
    <>
      <Typography variant="h5" gutterBottom>
        ملخص اجمالي
      </Typography>
      <Grid container spacing={3} className={classes.summarySectionContainer}>
        {CARDS_DATA.map(card => (
          <Grid key={card.title} item xs={12} sm={6} lg={3}>
            <CustomCard
              title={card.title}
              value={renderCardValue(card.value)}
              styleClass={card.className}
              icon={card.icon}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SummarySection;
