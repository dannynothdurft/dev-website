"use client";
/* 
    File: /ui/NAV.tsx
    Version: 1.0.0
    Developer: Danny Nothdurft  
    Description:
*/

import { FC, ReactNode } from "react";

interface NavProps {
  children: ReactNode;
}

const NAV: FC<NavProps> = ({ children }) => {
  return <nav className="nav-ui-elements">{children}</nav>;
};

export default NAV;
