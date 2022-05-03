import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { partnersRef } from "../firebase";
import { getDocs } from "firebase/firestore";

export const getPartners = createAsyncThunk("partners/getPartners", async (_, { rejectWithValue }) => {
  let partners = [];
  await getDocs(partnersRef)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        partners.push({ ...doc.data(), id: doc.id });
      });
    })
    .catch((err) => {
      return rejectWithValue(err.code);
    });
  return partners;
});

const initialState = {
  partners: [],
  partnersCount: 0,
  isLoading: true,
  error: null,
};

const partnersSlice = createSlice({
  name: "partners",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPartners.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPartners.fulfilled, (state, action) => {
        state.partners = action.payload;
        state.partnersCount = action.payload.length;
        state.isLoading = false;
      })
      .addCase(getPartners.rejected, (state, action) => {
        state.isLoading = true;
        state.error = action.payload;
      });
  },
});

export const selectPartners = ({ partners }) => partners;

export default partnersSlice.reducer;
