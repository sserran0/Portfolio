import type { Metadata } from "next";
import {Gamja_Flower, SUSE_Mono, Spline_Sans_Mono, Lexend} from "next/font/google";
import Background from "@/components/Background";
import "./globals.css";

const lexend = Lexend({
  variable: "--lexend",
  weight: ["400","700"],
  display: "swap",
})

const gamjaFlower = Gamja_Flower({
  variable: "--gamja-Flower",
  weight: ["400","400"],
  display: "swap",
});


export const metadata: Metadata = {
  title: "Santiago Serrano-Guillen Portfolio",
  description: "CS at CSU, Software Developer",
  metadataBase: new URL("https://portfolio-santiago.vercel.app"),
  openGraph:{
    title: "Santiago Serrano-Guillen Portfolio",
    description: "About, Projects, Contact",
    type: "website",
    url: "https://portfolio-santiago.vercel.app",
    images : ["/og-image.png"],
  },

  twitter: {card: "summary_large_image"},
  icons: {icon: "/favicon-portfolioicon.ico"},
};


export default function RootLayout({children} : {children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} ${gamjaFlower.variable} bg-[#0b0c10] text-[#e5e7eb] antialiased`}>
        <div className= "max-w-[980px] mx-auto px-4 sm:px-5 py-8 sm:py-10">
        </div>
        <Background />
        <div className="relative z-10 max-w-[980px] mx-auto px-4 sm:px-5 py-8 sm:py-10">
          {children}
        </div>
      </body>
    </html>
  );
}
