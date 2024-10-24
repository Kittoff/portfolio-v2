import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "../components/header/Menu";
import SmoothScrolling from "@/components/SmoothScrolling";
import Footer from "@/components/footer/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const melodrama = localFont({
  src: "./fonts/MelodramaVF.woff",
  variable: "--font-melodrama",
  weight: "300 700",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${melodrama.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <Menu />
        <SmoothScrolling>{children}</SmoothScrolling>
        <Footer />
      </body>
    </html>
  );
}
