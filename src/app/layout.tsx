import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "./components/Navigation";

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
      <body className={`font-maven bg-yellow-400`}>
        <Navigation />
        <div>
          {/* <div className="flex h-[calc(100vh-74px*2)] w-screen flex-col items-center justify-center"> */}
          {children}
        </div>
      </body>
    </html>
  );
}
