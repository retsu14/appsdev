import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import residentService from "./residentService";

const initialState = {
  residents: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};
//

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

// create
export const createResident = createAsyncThunk(
  "residents/create",
  async (formdata, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await residentService.createResident(formdata, token);
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

// ddlete
export const deleteResident = createAsyncThunk(
  "residents/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await residentService.deleteResident(id, token);
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
export const updateResident = createAsyncThunk(
  "residents/update",
  async ({ id, formdata }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await residentService.updateResident(id, formdata, token);
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
      })

      //create
      .addCase(createResident.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createResident.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.residents.push(action.payload);
      })
      .addCase(createResident.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteResident.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteResident.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.residents = state.residents.filter(
          (residents) => residents._id !== action.payload.id
        );
      })
      .addCase(deleteResident.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      //upddate
      .addCase(updateResident.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateResident.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        // Find the index of the updated barangay official in the state
        const index = state.residents.findIndex(
          (residents) => residents._id === action.payload.id
        );

        if (index !== -1) {
          // Create a new array with the updated data
          const updatedSkmembers = [...state.residents];
          updatedSkmembers[index] = action.payload;

          // Update the state with the new array
          state.residents = updatedSkmembers;
        }
        window.location.reload();
      })
      .addCase(updateResident.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = residentSlice.actions;
export default residentSlice.reducer;
