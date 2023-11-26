import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import barangayReducer from "../features/barangayOfficials/barangaySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    barangayofficials: barangayReducer,
  },
});
