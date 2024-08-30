import "@/styles/globals.scss";
import type { Metadata } from "next";
import MainLayout from "@/layout/MainLayout";
import Redux from "@/lib/Redux";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <Redux>
        <MainLayout>{children}</MainLayout>
      </Redux>
    </html>
  );
}
