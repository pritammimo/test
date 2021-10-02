import { configureStore } from "@reduxjs/toolkit";
import userManagementSlice from "./userManagmentSlice";
import UserAuthenticationReducer from "./userAuthenticationSlice";
export default configureStore({
  reducer: {
    user: UserAuthenticationReducer,
    adminuserManagement: userManagementSlice,
  },
});