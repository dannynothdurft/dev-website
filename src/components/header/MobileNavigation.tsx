"use client";
/* 
    File: /components/header/MobileNavigation.tsx
    Version: 1.0.0
    Developer: Danny Nothdurft  
    Description:
*/

import NavCon from "@/lang/de/navigation.json";
import { usePathname } from "next/navigation";

import { MOBILENAV } from "@/ui/NAV";
import LINK from "@/ui/LINK";

import toggleMenu from "@/utils/toggleMenu";

const MobileNavigation = () => {
  const pathname = usePathname();

  return (
    <MOBILENAV>
      {NavCon.header.map((link: any) => {
        return (
          <LINK
            classes={pathname === link.href ? "active" : ""}
            key={link.id}
            href={link.href}
            text={link.text}
            title={link.title}
            onClick={toggleMenu}
          />
        );
      })}
    </MOBILENAV>
  );
};

export default MobileNavigation;
