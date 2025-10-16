'use client'
import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Navbar from "@/_component/navbar/page";
import Footer from "@/_component/footer/page";  
import CopyRights from "@/_component/copyRights/page";
import { Provider } from "react-redux";
import { store } from "../store/store";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <Provider store={store}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Suspense>
        <Navbar/>
        {children}
        <Footer />
        <CopyRights/>
        </Suspense>
      </body>
      </Provider>
    </html>
  );
}
