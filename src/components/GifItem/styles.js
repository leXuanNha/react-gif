import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 12,
  },
  image: {
    width: "100%",
    height: 220,
    cursor: "pointer",
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
  modalView: {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 99,
  },
  faded: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    opacity: 0.9,
  },
  closeIcon: {
    color: "#fff",
    cursor: "pointer",
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 999,
  },
  modalImage: {
    width: "80%",
    maxWidth: 700,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

export default useStyles;
