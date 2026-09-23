import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reviews: [],
  loading: false,
  error: "",
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setReviews: (state, action) => {
      state.reviews = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setReviews,
  setLoading,
  setError,
} = reviewSlice.actions;

export default reviewSlice.reducer;