// ✅ PROVIDED: part of the starter. You don't need to change this file, but use it as a reference.
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// The starting state: nobody is logged in yet
const initialState = {
  name: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
      state.isLoggedIn = true;
    },
    logout: () => initialState,
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
