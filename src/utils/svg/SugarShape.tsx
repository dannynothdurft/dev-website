/* 
    File: utils/svg/SugarShape.tsx
    Version: 1.0.0
    Developer: Danny Nothdurft  
    Description:
*/

"use client";
import React, { FC } from "react";

interface SugarShapeProps {
  width?: string;
  height?: string;
  Dref?: any;
}

const SugarShape: FC<SugarShapeProps> = ({
  width = "100px",
  height = "100px",
  Dref,
}) => {
  return (
    <svg
      width={width}
      height={height}
      data-ref={Dref}
      viewBox="0 0 2000 2000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        transform="translate(797,478)"
        d="m0 0h33l26 3 23 5 26 7 19 8 16 8 19 10 15 10 11 8 13 10 5-1 10-8 14-10 19-12 27-14 19-8 24-7 27-6 25-3h34l19 2 24 5 20 7 12 5 21 12 11 8 11 9 11 11 11 14 9 14 9 17 8 22 4 18 2 14v35l-4 29-7 24-9 20-10 17-11 16-12 14-9 10-19 19-11 9-10 9-11 9-11 10-11 9-10 9-11 9-10 9-11 9-21 21-12 17-7 12-6 15-4 14-2 15v16l4 20 6 15 7 12 9 12 9 10 11 9 16 10 11 5 15 5 10 2 11 1h19l17-2 17-4 33-11 26-12 20-11 16-11 14-10 10-9 8-7 29-29 10-6 6-1 8 5 7 10 7 19 4 20v11l-3 13-7 11-9 10-8 7-11 10-16 12-15 10-25 14-23 11-29 12-32 10-20 4-27 4h-41l-30-5-16-4-30-11-18-10-17-11-15-13-14-13-9-11-10-14-9-16-9-20-9-27-5-26-1-27 3-22 3-14 7-21 10-21 10-16 10-13 8-10 11-12 17-17 8-7 11-10 11-9 13-11 11-9 13-11 11-10 11-9 7-7 8-7 14-14 13-17 8-13 8-18 4-15 1-8v-23l-3-15-7-18-8-13-9-10-8-8-15-9-11-5-14-4-6-1-22-1-24 3-21 5-20 7-23 11-16 10-16 12-12 11-10 10-8 7-12 12-10 5-9-1-9-6-11-11-8-7-13-13-8-7-19-14-23-13-19-8-21-7-20-4-19-2-22 1-12 3-15 5-15 9-10 8-9 10-8 13-7 16-3 12-2 21 2 19 5 16 11 23 14 19 9 9 7 8 3 2v2l4 2 12 11 8 7 28 24 11 9 14 12 11 9 16 15 8 7 10 10 7 8 13 16 9 13 9 16 7 14 8 24 5 28v30l-5 29-10 30-12 25-12 19-11 13-6 7-8 7-11 10-13 9-15 9-15 8-24 9-15 4-28 5-8 1h-41l-38-6-21-6-29-10-33-15-16-8-22-13-14-10-13-10-12-11-13-12-7-10-4-9-2-13 3-19 5-17 8-16 8-7 5-1 9 4 9 7 33 33 11 9 18 13 19 12 15 8 30 13 32 10 17 3 11 1h18l17-2 20-6 16-8 12-8 12-11 7-7 10-14 6-10 6-16 3-14 1-17-2-18-5-17-5-12-7-13-10-14-11-12-12-12-11-9-11-10-11-9-10-9-11-9-11-10-11-9-10-9-11-9-25-25-18-22-11-17-12-23-6-17-5-18-4-32v-24l4-26 5-18 7-17 8-16 8-12 11-14 16-16 13-10 17-10 17-9 27-9 27-5z"
        fill="#FC3C6E"
      />
      <path
        transform="translate(545,1292)"
        d="m0 0h11l16 2 16 7 12 8 7 6 7 8 1-27h21v135l-1 20-4 21-8 17-7 9-7 7-10 6-17 7-25 4h-14l-19-3-15-5-13-7-12-11-8-11-7-12v-2h22l5 5 6 8 11 9 12 5 12 3 10 1h9l16-2 16-6 11-8 7-8 4-10 2-7 2-25v-7l-10 10-15 10-16 6-19 3-18-1-12-3-17-7-12-9-7-6-11-15-7-17-3-16v-15l2-14 7-18 9-13 9-10 10-8 15-8 11-4zm-1 20-15 4-12 6-12 10-9 13-5 11-3 13v18l4 15 7 12 8 9 10 7 11 5 13 3h23l12-3 11-5 10-7 9-10 6-12 3-12 1-8v-9l-3-17-5-12-8-11-7-7-14-8-12-4-6-1z"
        fill="#FC3C6E"
      />
      <path
        transform="translate(1581,1292)"
        d="m0 0h15l14 2 14 5 14 9 12 11 8 10 8 15 4 12 2 12v18l-3 16-6 15-7 11-11 12-8 7-14 8-11 4-17 3h-13l-17-3-16-7-13-9-9-9v-2h-2l-1 85-2 1h-18l-1-2v-220h20l1 1 1 27 7-7 5-6 14-10 16-7zm-4 20-12 3-14 7-12 11-7 9-7 16-2 9v20l4 16 6 12 8 10 12 9 16 7 14 2 16-1 13-4 11-6 12-11 6-8 5-10 4-13 1-16-3-17-8-16-6-8-8-8-13-8-12-4-6-1z"
        fill="#FC3C6E"
      />
      <path
        transform="translate(1768,1292)"
        d="m0 0h16l15 2 16 6 12 8 10 9 8 9 7 12 5 14 3 15v12l-145 1 2 14 5 15 6 10 9 10 11 7 10 4 12 2h11l17-3 16-8 10-8 9-12 4-6 6 2 11 6-1 4-7 12-14 15-14 9-12 5-13 3-9 1h-16l-17-3-13-5-12-7-14-14-9-14-6-15-3-11-1-9v-13l2-14 5-14 6-12 8-11 4-5h2l2-4 13-9 10-5 14-4zm-2 20-12 3-13 7-11 11-7 11-6 15v2h120l-2-9-8-16-8-9-14-9-14-5-5-1z"
        fill="#FC3C6E"
      />
      <path
        transform="translate(739,1292)"
        d="m0 0h14l15 2 15 6 13 9 11 11 3 4 1-28h20l1 1v160l-2 1h-18l-1-1v-25l-8 7-9 8-16 9-13 4-14 2h-12l-14-2-16-6-11-7-10-9-7-7-7-11-6-12-4-14-1-8v-17l2-13 6-16 7-12 9-11 11-10 13-8 14-5zm1 20-16 4-11 6-12 11-8 11-6 13-3 14v13l4 16 7 14 7 9 10 9 16 8 16 3 17-1 13-4 11-6 11-9 8-11 5-11 3-13v-21l-4-15-7-13-9-10-8-7-14-7-12-3z"
        fill="#FC3C6E"
      />
      <path
        transform="translate(1369,1292)"
        d="m0 0h14l15 2 15 6 12 8 10 10 5 6 1-28h20l1 1v160l-1 1h-19l-1-1v-25l-8 7-9 8-14 8-11 4-9 2-9 1h-13l-16-3-13-5-11-7-10-9-7-7-9-14-6-14-3-14v-24l4-16 8-17 10-13 8-8 13-9 13-6 11-3zm1 20-13 3-14 7-12 11-7 9-7 15-3 14v12l3 15 8 16 7 9 10 9 16 8 7 2 17 1 14-2 12-5 10-6 10-9 8-12 5-14 1-6v-23l-3-12-7-14-10-12-13-9-12-5-9-2z"
        fill="#FC3C6E"
      />
      <path
        transform="translate(1016,1234)"
        d="m0 0h19l13 4 11 6 13 12 9 11v4l-11 8-4 3-4-2-14-15-10-6-11-2-13 1-8 4-5 5-4 7-1 3v15l6 12 9 10 14 11 16 13 14 11 14 14 8 11 7 15 2 11v12l-3 12-6 12-9 10-8 7-14 7-11 3h-21l-13-3-14-7-12-11-7-8-10-15v-3l13-7 5-3 7 10 6 8 1 3h2l5 5 9 6 11 3h12l13-4 11-8 6-9 2-6v-16l-5-12-8-10-12-12-22-18-16-13-10-9-8-10-6-13-2-8v-18l4-12 6-10 9-9 10-6 9-3z"
        fill="#FC3C6E"
      />
      <path
        transform="translate(197,1234)"
        d="m0 0h19l11 3 12 6 13 11 10 12v5l-14 11h-3v-2h-2l-9-11-10-8-8-3-6-1h-9l-8 2-9 6-5 8-2 7v8l4 12 8 10 7 7 12 9 14 11 14 12 8 7 9 10 7 11 5 11 3 19-3 16-6 12-8 10-8 7-10 6-17 5-9 1-17-2-14-5-11-7-13-13-10-15-2-5 9-6 7-5 4 2 6 10 9 11 11 8 7 3 6 1h11l13-4 9-6 7-8 3-8 1-12-3-12-6-10-11-12-8-7-13-11-14-11-14-12-8-8-6-9-5-12-2-10v-9l2-10 4-10 8-11 10-8 14-6z"
        fill="#FC3C6E"
      />
      <path
        transform="translate(1125,1233)"
        d="m0 0 20 1v90l6-5 7-8 13-10 16-7 13-2h12l13 2 16 8 8 7 7 10 5 11 4 16 1 27v84l-1 1h-19l-1-10v-56l-2-38-1-12-5-12-6-8-9-6-8-3-7-1h-10l-13 3-13 7-7 6-8 11-5 10-3 10-1 8-1 22-1 68-1 1h-19z"
        fill="#FC3C6E"
      />
      <path
        transform="translate(297,1296)"
        d="m0 0h21l1 80 1 22 2 12 7 14 7 7 16 8 16 2 17-2 16-8 7-7 5-9 3-13 1-10 1-96h21l1 1-1 88-2 23-5 17-6 11-10 11-10 7-13 5-19 3h-13l-14-2-16-6-11-8-8-8-8-14-5-19-2-22z"
        fill="#FC3C6E"
      />
      <path
        transform="translate(926,1292)"
        d="m0 0h10l11 3 2 4-10 16-7-2h-9l-9 4-7 5-7 10-5 12-3 14-1 10-1 89-1 1h-20l-1-1v-161h21l1 1v20l5-5 6-7 12-9 7-3z"
        fill="#FC3C6E"
      />
    </svg>
  );
};

export default SugarShape;
