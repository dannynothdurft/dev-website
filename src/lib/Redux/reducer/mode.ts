/* 
    File: redux/reducer/user.ts
    Version: 1.0.0
    Developer: Danny Nothdurft  
    Description:
*/

"use client";
import { createSlice } from "@reduxjs/toolkit";

export const mode = createSlice({
  name: "mode",
  initialState: {
    mode: false,
  },
  reducers: {
    switchMode(state) {
      state.mode = !state.mode;
    },
  },
});

export const { switchMode } = mode.actions;

export default mode.reducer;
