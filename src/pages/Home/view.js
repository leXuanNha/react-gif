import React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import GifList from "../../components/GifList";
import useStyles from "./styles";

const HomeView = ({ loading, error, data, onGetMore }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {loading && <LinearProgress className={classes.loading} />}

      <GifList data={data} />

      <Button
        className={classes.getMoreBtn}
        variant="contained"
        color="primary"
        disabled={loading}
        onClick={onGetMore}
      >
        Get more
      </Button>

      <Snackbar
        open={error}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="error">
          Something went wrong. Please try again later.
        </Alert>
      </Snackbar>
    </div>
  );
};

HomeView.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  data: PropTypes.array,
  onGetMore: PropTypes.func.isRequired,
};

HomeView.defaultProps = {
  loading: false,
  error: false,
  data: [],
};

export default HomeView;
