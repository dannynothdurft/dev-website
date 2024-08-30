"use client";
/* 
    File: /components/header/DarkLightMode.tsx
    Version: 1.0.0
    Developer: Danny Nothdurft  
    Description:
*/

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchMode } from "@/lib/Redux/reducer/mode";

import { IconButton } from "@/ui/BUTTONS";

import Moon from "@/utils/svg/Moon";
import Sun from "@/utils/svg/Sun";

const DarkLightMode = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state: any) => state.mode);

  const switchM = () => {
    dispatch(switchMode());
  };

  return <IconButton onClick={switchM} icon={mode ? <Sun /> : <Moon />} />;
};

export default DarkLightMode;
