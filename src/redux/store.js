import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice";
import partners from "./partnersSlice";

export const store = configureStore({
  reducer: {
    user,
    partners,
  },
});
