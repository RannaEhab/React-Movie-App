import { configureStore } from "@reduxjs/toolkit";
import watchListSlice from "./Slices/watchlist";
import registerationSlice from "./Slices/registeration";

export const store = configureStore({
  reducer: {
    watchList: watchListSlice,
    registeration: registerationSlice,
  },
});
