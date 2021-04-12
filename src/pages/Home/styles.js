import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "80%",
    margin: "0 auto",
    textAlign: "center",
  },
  loading: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
  },
  getMoreBtn: {
    marginTop: 40,
    marginBottom: 40,
  },
});

export default useStyles;
