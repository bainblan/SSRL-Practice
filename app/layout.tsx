import type { Metadata } from "next";
import { Montserrat, Lato, Armata } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      className={`${montserrat.variable} ${lato.variable} ${armata.variable} h-full antialiased`}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
