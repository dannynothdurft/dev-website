/* 
    File: redux/store.ts
    Version: 1.0.0
    Developer: Danny Nothdurft  
    Description:
*/

("use strict");
import { configureStore } from "@reduxjs/toolkit";

import modeReducer from "./reducer/mode";

export const store = configureStore({
  reducer: {
    mode: modeReducer,
  },
});
