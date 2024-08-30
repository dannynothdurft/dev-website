/* 
    File: utils/svg/Moon.tsx
    Version: 1.0.0
    Developer: Danny Nothdurft  
    Description:
*/

"use client";
import React, { FC } from "react";

interface MoonProps {
  width?: string;
  height?: string;
  Dref?: any;
}

const Moon: FC<MoonProps> = ({ width = "25px", height = "25px", Dref }) => {
  return (
    <svg
      width={width}
      height={height}
      data-ref={Dref}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        data-ref={Dref}
        d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="#1C274C"
      />
    </svg>
  );
};

export default Moon;
