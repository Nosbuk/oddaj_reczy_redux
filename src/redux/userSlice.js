import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
