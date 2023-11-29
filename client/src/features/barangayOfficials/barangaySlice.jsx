import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import barangayService from "./barangayService";

const initialState = {
  barangayofficials: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createBarangayOfficial = createAsyncThunk(
  "barangayofficials/create",
  async (barangayData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await barangayService.createBarangayOfficial(barangayData, token);
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

export const getBarangayOfficials = createAsyncThunk(
  "barangayofficials/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await barangayService.getBarangayOfficials(token);
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

export const deleteBarangayOfficial = createAsyncThunk(
  "barangayofficials/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await barangayService.deleteBarangayOfficial(id, token);
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

export const barangaySlice = createSlice({
  name: "barangayofficials",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBarangayOfficial.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBarangayOfficial.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.barangayofficials.push(action.payload);
      })
      .addCase(createBarangayOfficial.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getBarangayOfficials.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBarangayOfficials.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.barangayofficials = action.payload;
      })
      .addCase(getBarangayOfficials.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteBarangayOfficial.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBarangayOfficial.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.barangayofficials = state.barangayofficials.filter(
          (barangayofficial) => barangayofficial._id !== action.payload.id
        );
      })
      .addCase(deleteBarangayOfficial.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = barangaySlice.actions;
export default barangaySlice.reducer;
