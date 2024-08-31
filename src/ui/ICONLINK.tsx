"use client";
/* 
    File: /ui/ICONLINK.tsx
    Version: 1.0.0
    Developer: Danny Nothdurft  
    Description:
*/

import { FC } from "react";
import Link from "next/link";

import SugarShape from "@/utils/svg/SugarShape";

const components = {
  SugarShape,
};

interface AProps {
  classes?: string;
  id?: string;
  title?: string;
  name?: string;
  href: string;
  type?: string;
  target?: string;
  tabindex?: string;
  rel?: string;
  hreflang?: string;
  lang?: string;
  data?: string;
  dataVal?: string;
  download?: string;
  referrerpolicy?: string;
  ping?: string;
  style?: object;
  svg: string;
  onClick?: () => void;
}

const ICONLINK: FC<AProps> = ({
  classes,
  id,
  title,
  name,
  href,
  type,
  target,
  tabindex,
  rel,
  hreflang,
  lang,
  data,
  dataVal,
  download,
  referrerpolicy,
  style,
  ping,
  svg,
  onClick,
}) => {
  const SVGComponent = components[svg];

  return (
    <Link
      className={`a-ui-element ${classes ? classes : ""}`}
      {...(id && { id })}
      {...(title && { title })}
      {...(name && { name })}
      href={href}
      {...(type && { type })}
      {...(target && { target })}
      {...(tabindex && { tabindex })}
      {...(rel && { rel })}
      {...(hreflang && { hreflang })}
      {...(lang && { lang })}
      {...(data && { data })}
      {...(dataVal && { dataVal })}
      {...(download && { download })}
      {...(referrerpolicy && { referrerpolicy })}
      {...(style && { style })}
      {...(ping && { ping })}
      {...(onClick && { onClick })}
    >
      <SVGComponent />
    </Link>
  );
};

export default ICONLINK;
