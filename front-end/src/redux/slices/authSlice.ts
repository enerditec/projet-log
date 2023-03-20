import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authStore",
  initialState: {},
  reducers: {
    setAuth: (state, { payload }) => {
      return payload;
    },
  },
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
