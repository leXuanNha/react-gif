import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTrendingGif } from "../api/gif";

const actions = {
  getTrendingGifs: createAsyncThunk("gifs/getTrending", getTrendingGif)
};

export default actions;
