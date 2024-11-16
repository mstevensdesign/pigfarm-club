import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "./components/Navigation";
import ReactQueryProvider from "./utils/providers";

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
      <body className={`bg-yellow`}>
        <ReactQueryProvider>
          <Navigation />
          <div>{children}</div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
