"use client";
/* 
    File: /components/header/index.tsx
    Version: 1.0.0
    Developer: Danny Nothdurft  
    Description:
*/

import LINK from "@/ui/LINK";
import Navigation from "./Navigation";
import DarkLightMode from "./DarkLightMode";

const Header = () => {
  return (
    <header className="header-component">
      <LINK href="/" text="DEV" classes="logo-link" />
      <Navigation />
      <DarkLightMode />
    </header>
  );
};

export default Header;
