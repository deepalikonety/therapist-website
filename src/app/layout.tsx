import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import {Toaster} from "react-hot-toast";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});


const sourceSans = Source_Sans_3({
  variable: "--font-sourceSans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dr. Serena Blake – Therapy & Healing",
  description: "Helping you manage anxiety, improve relationships & heal from trauma.",
  icons: [
   
    { url: "/image.png", sizes: "64x64", type: "image/png" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html  suppressHydrationWarning lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body  suppressHydrationWarning={true}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
