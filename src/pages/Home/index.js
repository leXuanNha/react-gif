import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import gifActions from "../../actions/gif";
import { LIMIT } from "../../constants/gif";
import HomeView from "./view";

const HomePage = () => {
  const dispatch = useDispatch();

  const gifs = useSelector(state => state.gifs);

  const {
    loading,
    error,
    data,
    pagination,
  } = gifs;

  useEffect(() => {
    dispatch(gifActions.getTrendingGifs({ limit: LIMIT }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleGetMore = () => {
    dispatch(gifActions.getTrendingGifs({
      limit: LIMIT,
      offset: pagination.count + pagination.offset,
    }));
  }

  return (
    <HomeView
      loading={loading}
      error={error}
      data={data}
      onGetMore={handleGetMore}
    />
  );
};

export default HomePage;
