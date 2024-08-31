"use client";
/* 
    File: /components/header/index.tsx
    Version: 1.0.0
    Developer: Danny Nothdurft  
    Description:
*/

import { useSelector } from "react-redux";
import LINK from "@/ui/LINK";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import DarkLightMode from "./DarkLightMode";
import HamburgerButton from "./HamburgerButton";

import toggleMenu from "@/utils/toggleMenu";

const Header = () => {
  const { mobileNavigation } = useSelector((state: any) => state.mode);

  return (
    <header className="header-component">
      <LINK href="/" text="DEV" classes="logo-link" />
      <Navigation />
      <div className="flex-center">
        <HamburgerButton
          toggle={mobileNavigation}
          onClick={toggleMenu}
          Dref="mMenu"
        />
        <DarkLightMode />
        {mobileNavigation ? <MobileNavigation /> : null}
      </div>
    </header>
  );
};

export default Header;
