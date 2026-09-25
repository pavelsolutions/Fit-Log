import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import WorkoutProvider from "@/context/WorkoutContext";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog - Workout-Library ",
  description: "Excercise Explore",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${inter.className} bg-[#0c0d11] min-h-full flex flex-col`}>
        <WorkoutProvider>
          <Navbar />
          {children}
          <Footer />
        </WorkoutProvider>

        <ToastContainer
          autoClose={1500}
          hideProgressBar
          closeOnClick
          toastClassName="!min-h-0 !w-fit !min-w-0 !max-w-[90vw] !rounded-lg !border !border-[#292C31] !bg-[#15171D] !px-3 !py-3 !text-sm !text-white !shadow-lg"
        />
      </body>
    </html>
  );
}
