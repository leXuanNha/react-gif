import React from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import LinearProgress from "@material-ui/core/LinearProgress";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import GifList from "../../components/GifList";
import useStyles from "./styles";

const HomeView = ({ loading, error, data, onGetMore }) => {
  const classes = useStyles();

  return (
    <InfiniteScroll
      dataLength={data.length} //This is important field to render the next data
      next={onGetMore}
      hasMore={true}
      scrollThreshold="90%"
    >
      <div className={classes.root}>
        {loading && <LinearProgress className={classes.loading} />}

        <GifList data={data} onGetMore={onGetMore} />

        <Snackbar
          open={error}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert severity="error">
            Something went wrong. Please try again later.
          </Alert>
        </Snackbar>
      </div>
    </InfiniteScroll>
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
