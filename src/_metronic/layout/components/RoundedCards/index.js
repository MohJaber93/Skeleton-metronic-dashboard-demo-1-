import React from "react";
import { Typography, Grid, CircularProgress } from "@material-ui/core";
import CustomCard from "../CustomCard";
import { useStyles } from "./style";

const OrdersCards = ({ data, users }) => {
  const classes = useStyles({ users });

  const renderCardValue = value =>
    value || value === 0 ? value : <CircularProgress size={30} />;

  return (
    <CustomCard styleClass={classes.cardsSection}>
      <CustomCard>
        <CustomCard>
          <Grid container>
            {data.map(card => (
              <Grid
                item
                container
                direction="column"
                justify="space-between"
                alignItems="center"
                xs={4}
                md={users ? 4 : 2}
                key={card.id}
              >
                <CustomCard
                  className={`${classes.card} ${classes[card.className]}`}
                >
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
