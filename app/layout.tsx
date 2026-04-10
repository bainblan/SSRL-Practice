import type { Metadata } from "next";
import { Montserrat, Lato, Armata, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ConditionalFooter from "./components/ConditionalFooter";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const armata = Armata({
  variable: "--font-armata",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "UGA Small Satellite Research Laboratory",
  description:
    "The Small Satellite Research Laboratory at the University of Georgia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", montserrat.variable, lato.variable, armata.variable, "font-sans", geist.variable)}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <ConditionalFooter />
      </body>
    </html>
  );
}
