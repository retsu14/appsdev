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

export const updateBarangayOfficial = createAsyncThunk(
  "barangayofficials/update",
  async ({ id, barangayData }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await barangayService.updateBarangayOfficial(
        id,
        barangayData,
        token
      );
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
      //create
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
      //get
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
      //delete
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
      })
      //update
      .addCase(updateBarangayOfficial.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateBarangayOfficial.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // Find the index of the updated barangay official in the state
        const index = state.barangayofficials.findIndex(
          (barangayofficial) => barangayofficial._id === action.payload.id
        );

        if (index !== -1) {
          // Create a new array with the updated data
          const updatedBarangayOfficials = [...state.barangayofficials];
          updatedBarangayOfficials[index] = action.payload;

          // Update the state with the new array
          state.barangayofficials = updatedBarangayOfficials;
        }
        window.location.reload();
      })
      .addCase(updateBarangayOfficial.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = barangaySlice.actions;
export default barangaySlice.reducer;
