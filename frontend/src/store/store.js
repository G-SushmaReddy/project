import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/slices";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});