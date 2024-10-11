import type { Metadata } from "next";
import { Inter, Londrina_Solid, Maven_Pro } from "next/font/google";
import "./globals.css";
import { Navigation } from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });
const londrina = Londrina_Solid({
  subsets: ["latin"],
  weight: ["400"],
});
const maven = Maven_Pro({ subsets: ["latin"], weight: ["400"] });

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
      <body className={`${maven.className} bg-yellow-400`}>
        <Navigation />
        <div>
          {/* <div className="flex h-[calc(100vh-74px*2)] w-screen flex-col items-center justify-center"> */}
          {children}
        </div>
      </body>
    </html>
  );
}
