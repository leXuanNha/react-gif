import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 12,
  },
  image: {
    width: "100%",
    height: 220,
    [theme.breakpoints.down("sm")]: {
      height: 120,
    },
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
    color: "#aaa",
    fontSize: 12,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    "& > div > .MuiSvgIcon-root": {
      fontSize: 25,
      cursor: "pointer",
      transform: "rotate(-45deg)",
    },
  },
  interactive: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& > div": {
      display: "flex",
      alignItems: "center",
      marginLeft: 8,
    },
    "& .MuiSvgIcon-root": {
      fontSize: 16,
    },
  },
  userInfo: {
    display: "flex",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 16,
  },
  avatar: {
    width: 20,
    height: 20,
    marginRight: 8,
    borderRadius: "50%",
  },
  userName: {
    color: "#1976d2",
    fontWeight: "600",
  },
}));

export default useStyles;
