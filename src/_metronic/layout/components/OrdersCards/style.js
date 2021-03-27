import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles(theme => ({
  cardsSection: {
    height: "360px",
    padding: "5px",
    "& div": {
      padding: "5px",
      color: "#000",
      height: "100%"
    },
    "& > div": {
      height: "100%",
      "& > div": {
        height: "100%",
        "& > div": {
          height: "50%",
          [theme.breakpoints.up("md")]: {
            height: "100%"
          }
        }
      }
    },
    [theme.breakpoints.up("md")]: {
      height: "180px"
    }
  },
  card: {
    height: "90px !important",
    width: "90px",
    borderRadius: "50%",
    textAlign: "center",
    lineHeight: "90px",
    padding: "0  !important",
    color: "#fff  !important",
    fontWeight: "bold",
    fontSize: "20px"
  },
  pendingCard: {
    background: "rgba(251, 140, 0, 0.65)"
  },
  deliveredCard: {
    background: "#57a55a"
  },
  rejectedCard: {
    background: "#e47979"
  },
  totalCard: {
    background: "rgba(92, 48, 140, 0.84)"
  }
}));
