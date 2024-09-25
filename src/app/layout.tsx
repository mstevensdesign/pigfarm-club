import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PigFarm Club",
  description: "Club Page for PigFarm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-yellow-400`}>
        <Navigation />
        <div className="flex h-[calc(100vh-74px*2)] w-screen flex-col items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
