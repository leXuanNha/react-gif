import { createSlice } from "@reduxjs/toolkit";
import actions from "../actions/gif";

const initialState = {
  loading: false,
  error: false,
  data: [],
  pagination: {},
};

const gifSlice = createSlice({
  name: "gifs",
  initialState,
  extraReducers: {
    [actions.getTrendingGifs.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
        error: false,
      };
    },
    [actions.getTrendingGifs.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: false,
        pagination: action.payload.pagination,
        data: [...state.data, ...action.payload.data],
      };
    },
    [actions.getTrendingGifs.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
  },
});

// Export
export default gifSlice.reducer;
