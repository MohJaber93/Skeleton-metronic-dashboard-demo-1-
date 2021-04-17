import makeStyles from "@material-ui/core/styles/makeStyles";

export const useStyles = makeStyles(theme => ({
  cardsSection: {
    height: ({ users }) => (users ? "180px" : "360px"),
    padding: "5px",
    marginBottom: "10px",
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
          height: ({ users }) => (users ? "100%" : "50%"),
          [theme.breakpoints.up("md")]: {
            height: "100% !important"
          }
        }
      }
    },
    [theme.breakpoints.up("md")]: {
      height: "180px !important"
    }
  },
  card: {
    height: "90px !important",
    width: "90px",
    borderRadius: "50%",
    padding: "0  !important",
    color: "#fff  !important",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& > h5": {
      wordBreak: "break-word",
      textAlign: "center"
    }
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
  },
  acceptedCard: {
    background: "#73c176"
  },
  othersCard: {
    background: "rgba(173, 54, 114, 0.80)"
  }
}));
