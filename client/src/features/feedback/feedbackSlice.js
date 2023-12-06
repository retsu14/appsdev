import feedbackService from "./feedbackService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  feedbacks: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const getFeedbacks = createAsyncThunk(
  "feedbacks/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await feedbackService.getFeedbacks(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteFeedback = createAsyncThunk(
  "feedbacks/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await feedbackService.deleteFeedback(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const createFeedback = createAsyncThunk(
  "feedbacks/create",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await feedbackService.createFeedback(data, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const feedbackSlice = createSlice({
  name: "feedbacks",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      //get
      .addCase(getFeedbacks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFeedbacks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.feedbacks = action.payload;
      })
      .addCase(getFeedbacks.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteFeedback.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteFeedback.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.feedbacks = state.feedbacks.filter(
          (feedbacks) => feedbacks._id !== action.payload.id
        );
      })
      .addCase(deleteFeedback.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = feedbackSlice.actions;
export default feedbackSlice.reducer;
