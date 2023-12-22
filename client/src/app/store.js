import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import barangayReducer from "../features/barangayOfficials/barangaySlice";
import skmembersReducer from "../features/skMembers/skSlice";
import residentReducer from "../features/residents/residentSlice";
import householdReducer from "../features/householdRecord/householdSlice";
import feedbackReducer from "../features/feedback/feedbackSlice";
import announcementReducer from "../features/announcements/announcementSlice";
import userReducer from "../features/users/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    barangayofficials: barangayReducer,
    skmembers: skmembersReducer,
    residents: residentReducer,
    households: householdReducer,
    feedbacks: feedbackReducer,
    announcements: announcementReducer,
    users: userReducer,
  },
});
