import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import householdService from "./householdService";

const initialState = {
  households: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const getHouseholds = createAsyncThunk(
  "households/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await householdService.getHouseholds(token);
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

export const householdSlice = createSlice({
  name: "households",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      //get
      .addCase(getHouseholds.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getHouseholds.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.households = action.payload;
      })
      .addCase(getHouseholds.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = householdSlice.actions;
export default householdSlice.reducer;
