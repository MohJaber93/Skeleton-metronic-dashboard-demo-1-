import React from "react";
import { Paper, Typography, Box } from "@material-ui/core";
import { useStyles } from "./style";

const CustomCard = ({
  title,
  value,
  styleClass,
  icon: Icon,
  children,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <Paper
      elevation={3}
      className={`${classes.cardContainer} ${styleClass}`}
      {...rest}
    >
      {Icon ? (
        <>
          <Box
            height="100%"
            padding="5px 20px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Typography
              className={classes.cardTitle}
              color="inherit"
              variant="h5"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography variant="h6">{value}</Typography>
          </Box>
          <Icon className={classes.cardIcon} fontSize="large" />
        </>
      ) : (
        children
      )}
    </Paper>
  );
};

export default CustomCard;
