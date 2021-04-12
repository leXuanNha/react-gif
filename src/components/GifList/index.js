import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import GifItem from "../GifItem";

const GifList = ({ data }) => {
  return (
    <Grid container spacing={3}>
      {data.map((item) => (
        <Grid key={item.id} item xs={6} sm={4} md={3}>
          <GifItem data={item} />
        </Grid>
      ))}
    </Grid>
  );
};

GifList.propTypes = {
  data: PropTypes.array,
};

GifList.defaultProps = {
  data: [],
};

export default GifList;
