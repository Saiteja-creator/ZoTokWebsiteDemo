
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ZoTokWebsite Demo",
  description: "ZoTokDistributors's Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-row  h-screen w-screen bg-purple-200 overflow-x-hidden  py-1">
        <Navbar/>
        <div className="ml-[65px]">{children}</div>
        </body>
    </html>
  );
}