import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles(theme => ({
  summarySectionContainer: {
    height: "400px",
    [theme.breakpoints.up("sm")]: {
      height: "300px"
    },
    [theme.breakpoints.up("lg")]: {
      height: "150px"
    }
  },
  firstCard: {
    background: "linear-gradient(135deg, #ff875e 1%, #fc629d 100%)"
  },
  secondCard: {
    background: "linear-gradient(135deg, #3bd1bf 0%, #119bd2 100%)"
  },
  thirdCard: {
    background: "linear-gradient(135deg, #ee70e9 0%, #8363f9 100%)"
  },
  fourthCard: {
    background: "linear-gradient(135deg, #f7cd13 1%, #39ce86 100%)"
  }
}));
