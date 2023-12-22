import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import announcementService from "./annoucementService";

const initialState = {
  announcements: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const getAnnouncements = createAsyncThunk(
  "announcements/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await announcementService.getAnnouncements(token);
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

export const deleteAnnoucement = createAsyncThunk(
  "announcements/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await announcementService.deleteAnnouncement(id, token);
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

export const createAnnouncement = createAsyncThunk(
  "announcements/create",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await announcementService.createAnnouncement(data, token);
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

export const announcementSlice = createSlice({
  name: "announcements",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      //get
      .addCase(getAnnouncements.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAnnouncements.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.announcements = action.payload;
      })
      .addCase(getAnnouncements.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteAnnoucement.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAnnoucement.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.announcements = state.announcements.filter(
          (announcement) => announcement._id !== action.payload.id
        );
      })
      .addCase(deleteAnnoucement.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      //create
      .addCase(createAnnouncement.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAnnouncement.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.announcements.push(action.payload);
      })
      .addCase(createAnnouncement.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = announcementSlice.actions;
export default announcementSlice.reducer;
