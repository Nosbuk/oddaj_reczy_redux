import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as logOut } from "firebase/auth";
import { auth } from "../firebase";

const initialState = {
  mail: "",
  password: "",
  isLogged: false,
  isLoading: false,
  error: null,
};

export const signUp = createAsyncThunk("user/signUp", async ({ mail, password }, { rejectWithValue }) => {
  try {
    await createUserWithEmailAndPassword(auth, mail, password);
  } catch (err) {
    return rejectWithValue(err.code);
  }
});

export const signIn = createAsyncThunk("user/signIn", async ({ mail, password }, { rejectWithValue }) => {
  try {
    await signInWithEmailAndPassword(auth, mail, password);
  } catch (err) {
    console.log(err);
    return rejectWithValue(err.code);
  }
});

export const signOut = createAsyncThunk("user/signOut", async (_, { rejectWithValue }) => {
  try {
    await logOut(auth);
  } catch (err) {
    return rejectWithValue(err.code);
  }
});

const authSlice = createSlice({
  name: "user",
  initialState: { ...initialState },
  reducers: {
    setMail: (state, action) => {
      state.mail = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setIsLogged: (state, action) => {
      state.isLogged = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state) => {
        state.isLogged = true;
        state.isLoading = false;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state) => {
        state.isLogged = true;
        state.isLoading = false;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(signOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signOut.fulfilled, () => {
        return initialState;
      })
      .addCase(signOut.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { setMail, setPassword, setIsLogged } = authSlice.actions;

export const selectUser = ({ user }) => user;

export default authSlice.reducer;
