import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: null,
  sacks: 0,
  city: "",
  for: "",
  organization: "",
  adress: {
    city: "",
    street: "",
    zip: "",
    time: "",
    date: "",
    mobile: "",
    notes: "",
  },
};

const multiformSlice = createSlice({
  name: second,
  initialState,
  reducers: {},
});

export const {} = multiformSlice.actions;

export default multiformSlice.reducer;
