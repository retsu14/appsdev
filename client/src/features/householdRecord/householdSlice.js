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

export const createHouseholds = createAsyncThunk(
  "households/create",
  async (formdata, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await householdService.createHouseholds(formdata, token);
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

export const deleteHousehold = createAsyncThunk(
  "households/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await householdService.deleteHousehold(id, token);
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

export const updateHousehold = createAsyncThunk(
  "households/update",
  async ({ id, formdata }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await householdService.updateHousehold(id, formdata, token);
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
      })
      //create
      .addCase(createHouseholds.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createHouseholds.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.households.push(action.payload);
      })
      .addCase(createHouseholds.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      //delete
      .addCase(deleteHousehold.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteHousehold.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.households = state.households.filter(
          (households) => households._id !== action.payload.id
        );
      })
      .addCase(deleteHousehold.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      //update
      .addCase(updateHousehold.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateHousehold.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // Find the index of the updated barangay official in the state
        const index = state.households.findIndex(
          (households) => households._id === action.payload.id
        );

        if (index !== -1) {
          // Create a new array with the updated data
          const updatedHousehold = [...state.households];
          updatedHousehold[index] = action.payload;

          // Update the state with the new array
          state.households = updatedHousehold;
        }
        window.location.reload();
      })
      .addCase(updateHousehold.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = householdSlice.actions;
export default householdSlice.reducer;
