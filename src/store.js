import { configureStore } from "@reduxjs/toolkit";
import gifReducer from "./reducers/gif";

const store = configureStore({
  reducer: {
    gifs: gifReducer,
  },
});

export default store;
