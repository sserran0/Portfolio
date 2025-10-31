import type { Metadata } from "next";
import {SUSE_Mono, Spline_Sans_Mono, Fira_Code} from "next/font/google";
import "./globals.css";

const suseMono = SUSE_Mono({
  variable: "--font-suse-mono",
  subsets: ["latin"],
  weight: ["400","700"],
  display: "swap",
});

const splineSansMono = Spline_Sans_Mono({
  variable: "--font-spline-sans-mono",
  subsets: ["latin"],
  weight: ["400","700"],
  display: "swap",
})

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  weight: ["400","700"],
  display: "swap",
})


export const metadata: Metadata = {
  title: "Santiago Serrano-Guillen Portfolio",
  description: "CS at CSU, Software Developer",
  metadataBase: new URL("https://portfolio-santiago.vercel.app"),
  openGraph:{
    title: "Santiago Serrano-Guillen Portfolio",
    description: "About,Projects, Contact",
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
      <body className={`${splineSansMono.className} ${suseMono.variable} ${firaCode.variable} bg-[#0b0c10] text-[#e5e7eb] antialiased`}>
        <div className= "max-w-[980px] mx-auto px-4 sm:px-5 py-8 sm:py-10">
        {children}
        </div>
      </body>
    </html>
  );
}
