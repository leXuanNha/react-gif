import queryString from "query-string";
import axiosClient from "./axiosClient";

export const getTrendingGif = (params) => {
  const query = queryString.stringify(params);
  return axiosClient.get(`/gifs/trending?${query}`);
};
