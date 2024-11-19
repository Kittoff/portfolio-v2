import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "../components/header/Menu";
import SmoothScrolling from "@/components/SmoothScrolling";
import Footer from "@/components/footer/Footer";

const bigilla = localFont({
  src: "./fonts/Bigilla.otf",
  variable: "--font-bigilla",
  weight: "100 900",
});
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
  title: {
    default: "Christophe Lozano • Freelance Developer",
    // template,
  },
  openGraph: {
    description:
      "Christophe Lozano est un développeur qui se spécialise dans l'animation et interraction. En tant qu'indépendant, il travaille avec des entreprises, agences, startups et particuliers à travers le monde.",
    images: ["/ogImage.png"],
  },
  keywords: [
    "developer",
    "développeur",
    "website",
    "Freelance Web Developer",
    "Creative Web Development",
    "Website Creation",
    "Full-Stack Developer",
    "Custom Web Solutions",
    "JavaScript Expert",
    "Web Development Consultant",
    "Freelance Developer Portfolio",
    "SEO Optimization for Websites",
    "Front-End Development",
    "Creative Web Design and Development",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${melodrama.variable} ${bigilla.variable}`}>
      <body className={`${inter.className} bg-primary antialiased`}>
        <Menu />
        <SmoothScrolling>{children}</SmoothScrolling>
        <Footer />
      </body>
    </html>
  );
}
