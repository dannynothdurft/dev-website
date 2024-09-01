"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
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
        <Footer />
      </body>
    );
  } else {
    return (
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    );
  }
};

export default MainLayout;
