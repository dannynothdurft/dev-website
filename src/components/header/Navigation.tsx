"use client";
/* 
    File: /components/header/Navigation.tsx
    Version: 1.0.0
    Developer: Danny Nothdurft  
    Description:
*/

import NavCon from "@/lang/de/navigation.json";
import { usePathname } from "next/navigation";

import NAV from "@/ui/NAV";
import LINK from "@/ui/LINK";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <NAV>
      {NavCon.header.map((link: any) => {
        console.log(link.href);
        return (
          <LINK
            classes={pathname === link.href ? "active" : ""}
            key={link.id}
            href={link.href}
            text={link.text}
            title={link.title}
          />
        );
      })}
    </NAV>
  );
};

export default Navigation;
