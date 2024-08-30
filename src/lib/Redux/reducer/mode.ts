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
    mobileNavigation: false,
  },
  reducers: {
    switchMode(state) {
      state.mode = !state.mode;
    },
    switchMobileNavigation(state) {
      state.mobileNavigation = !state.mobileNavigation;
    },
  },
});

export const { switchMode, switchMobileNavigation } = mode.actions;

export default mode.reducer;
