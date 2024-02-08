import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TheFooter } from "../../components/Footer/TheFooter";
import { TheHeader } from "../../components/Header/TheHeader";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <TheHeader></TheHeader>
        <main className="container">{children}</main>
        <TheFooter></TheFooter>
      </body>
    </html>
  );
}