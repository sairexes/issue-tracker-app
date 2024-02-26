"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { NextUIProvider } from "@nextui-org/system";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <NextUIProvider>
        <div className="fixed top-0 start-0 bottom-0 z-[40] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 ">
        <div className="px-6">
          <a className="flex-none text-xl font-semibold text-black" href="#" aria-label="Brand">Brand</a>
        </div>
          <Navigation />
        </div>
        <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
          {children}
        </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
