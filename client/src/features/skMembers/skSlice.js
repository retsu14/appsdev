import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import skService from "./skService";

const initialState = {
  skmembers: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

//get
export const getSkmembers = createAsyncThunk(
  "skmembers/get",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await skService.getSkmembers(token);
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

//create
export const createSkmember = createAsyncThunk(
  "skmembers/create",
  async (formdata, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await skService.createSkmember(formdata, token);
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
//delete
export const deleteSkmember = createAsyncThunk(
  "skmembers/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await skService.deleteSkmember(id, token);
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
//update
export const updateSkmember = createAsyncThunk(
  "skmembers/update",
  async ({ id, skdata }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await skService.updateSkmember(id, skdata, token);
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

export const skmembersSlice = createSlice({
  name: "skmembers",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      //get
      .addCase(getSkmembers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSkmembers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.skmembers = action.payload;
      })
      .addCase(getSkmembers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      //create
      .addCase(createSkmember.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createSkmember.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.skmembers.push(action.payload);
      })
      .addCase(createSkmember.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      //delete
      .addCase(deleteSkmember.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteSkmember.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.skmembers = state.skmembers.filter(
          (skmembers) => skmembers._id !== action.payload.id
        );
      })
      .addCase(deleteSkmember.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      //update
      .addCase(updateSkmember.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateSkmember.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // Find the index of the updated barangay official in the state
        const index = state.skmembers.findIndex(
          (skmembers) => skmembers._id === action.payload.id
        );

        if (index !== -1) {
          // Create a new array with the updated data
          const updatedSkmembers = [...state.skmembers];
          updatedSkmembers[index] = action.payload;

          // Update the state with the new array
          state.skmembers = updatedSkmembers;
        }
        window.location.reload();
      })
      .addCase(updateSkmember.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = skmembersSlice.actions;
export default skmembersSlice.reducer;
