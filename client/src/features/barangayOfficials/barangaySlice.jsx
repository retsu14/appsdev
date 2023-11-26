import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  barangayofficials: [],
  isError: false,
  isSuccess: false,
  message: "",
};

export const barangaySlice = createSlice({
  name: "barangayofficials",
  initialState,
  reducer: {
    reset: (state) => initialState,
  },
});

export const { reset } = barangaySlice.actions;
export default barangaySlice.reducer;
