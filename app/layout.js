import { Work_Sans } from "next/font/google";

import { FigmaProvider } from "@/context/FigmaProvider";
import { LiveProvider } from "@/context/LiveProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Room } from "@/context/RoomProvider";

import "./globals.css";

export const metadata = {
  title: "Figma Clone",
  description:
    "A minimalist Figma clone using fabric.js and Liveblocks for realtime collaboration",
};

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-primary-grey-100 overflow-hidden ${workSans.className}`}>
        <Room>
          <LiveProvider>
            <TooltipProvider>
              <FigmaProvider>{children}</FigmaProvider>
            </TooltipProvider>
          </LiveProvider>
        </Room>
      </body>
    </html>
  );
}
