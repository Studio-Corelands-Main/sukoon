import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";

import BookingModal from "./components/booking/BookingModal";
import Footer from "./components/footer/Footer";
import Headers from "./components/Headers";
import Preloader from "./components/Preloader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentRegular = localFont({
  src: [
    {
      path: "../../public/fonts/InstrumentSans-Regular.ttf",
    },
  ],
  variable: "--font-instrument-regular",
});
const charmanSerifLight = localFont({
  src: [
    {
      path: "../../public/fonts/Charman_Serif_Light.otf",
    },
  ],
  variable: "--font-charman-serif-light",
});

export const metadata: Metadata = {
  title: "Sukoon Indian Restaurant | Ascot Vale, Melbourne",
  description:
    "Contemporary Indian dining in Ascot Vale. Butter chicken, smoky grills and Tikki Bar bites. Open Tue to Sun, 5pm to 11pm. Book or order online.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentRegular.variable} ${charmanSerifLight.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Preloader />
        <Headers />
        {/* <ConditionalHeader /> */}
        {children}
        <Footer />
        <BookingModal />
      </body>
    </html>
  );
}
