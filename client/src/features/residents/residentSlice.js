import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import residentService from "./residentService";

const initialState = {
  residents: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const getResidents = createAsyncThunk(
  "residents/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await residentService.getResidents(token);
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

export const residentSlice = createSlice({
  name: "residents",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      //get
      .addCase(getResidents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getResidents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.residents = action.payload;
      })
      .addCase(getResidents.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = residentSlice.actions;
export default residentSlice.reducer;
