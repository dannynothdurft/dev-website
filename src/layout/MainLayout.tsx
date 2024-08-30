"use client";
import Header from "@/components/header";
import { useSelector } from "react-redux";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { mode } = useSelector((state: any) => state.mode);

  if (mode) {
    return (
      <body className="darkmode">
        <Header />
        {children}
      </body>
    );
  } else {
    return (
      <body>
        <Header />
        {children}
      </body>
    );
  }
};

export default MainLayout;
