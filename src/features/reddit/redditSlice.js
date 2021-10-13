import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
  posts: null,
  loading: false,
  error: false,
};

export const fetchSubReddits = createAsyncThunk(
  'reddit/fetchBySubReddit',
  async (query) => {
    const response = await fetch(`https://www.reddit.com/r/${query}.json`);
    return response.json();
  },
);

export const redditSlice = createSlice({
  name: 'reddit',
  initialState,
  reducers: {
    handleChange: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubReddits.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSubReddits.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      });
  },
});

export const { handleChange } = redditSlice.actions;

export default redditSlice.reducer;
