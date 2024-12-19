'use client'

import Footer from "@/components/Footer"

import Navbar from "@/components/Hero"
import { ClerkProvider } from "@clerk/nextjs";

export default function Hero() {


  return (
    <>
      <ClerkProvider >
        <Navbar />
        <Footer />
      </ClerkProvider>
    </>
  )
}
