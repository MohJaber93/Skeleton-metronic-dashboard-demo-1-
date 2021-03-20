import React from "react";
import { Grid, Typography } from "@material-ui/core";
import CustomCard from "../CustomCard";
import GroupIcon from "@material-ui/icons/Group";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ApartmentIcon from "@material-ui/icons/Apartment";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import { useStyles } from "./style";

const SummarySection = () => {
  const classes = useStyles();
  const CARDS_DATA = [
    {
      title: "مجموع العملاء النشطين",
      value: "55",
      icon: GroupIcon,
      className: classes.firstCard
    },
    {
      title: "إجمالي الطلبات",
      value: "20",
      icon: ShoppingCartIcon,
      className: classes.secondCard
    },
    {
      title: "مجموع الفروع",
      value: "35",
      icon: ApartmentIcon,
      className: classes.thirdCard
    },
    {
      title: "إجمالي رأس المال",
      value: "R$ 42,472.27",
      icon: LocalAtmIcon,
      className: classes.fourthCard
    }
  ];
  return (
    <>
      <Typography variant="h5" gutterBottom>
        ملخص اجمالي
      </Typography>
      <Grid container spacing={3} className={classes.summarySectionContainer}>
        {CARDS_DATA.map(card => (
          <Grid item xs={12} sm={6} lg={3}>
            <CustomCard
              title={card.title}
              value={card.value}
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
