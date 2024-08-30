"use client";
/* 
    File: /ui/NAV.tsx
    Version: 1.0.0
    Developer: Danny Nothdurft  
    Description:
*/

import { FC, ReactNode, useEffect, useRef } from "react";
import toggleMenu from "@/utils/toggleMenu";

interface NavProps {
  children: ReactNode;
}

export const NAV: FC<NavProps> = ({ children }) => {
  return <nav className="nav-ui-elements">{children}</nav>;
};

export const MOBILENAV: FC<NavProps> = ({ children }) => {
  const mobileMenu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedNode = event.target as HTMLElement;
      const dataRefValue = clickedNode.getAttribute("data-ref");

      if (dataRefValue === "mMenu") {
        return;
      }

      if (
        mobileMenu.current &&
        !mobileMenu.current.contains(event.target as Node)
      ) {
        toggleMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="mobile-nav-ui-elements" ref={mobileMenu}>
      <nav className="nav-elements">{children}</nav>
    </div>
  );
};
