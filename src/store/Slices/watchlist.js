import { createSlice } from "@reduxjs/toolkit";

const watchListSlice = createSlice({
  name: "watchList",
  initialState: {
    watchListValues: [],
  },
  reducers: {
    addMovie: (state, action) => {
      state.watchListValues.push(action.payload);
    },
    removeMovie: (state, action) => {
      state.watchListValues = state.watchListValues.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const { addMovie, removeMovie } = watchListSlice.actions;
export default watchListSlice.reducer;
