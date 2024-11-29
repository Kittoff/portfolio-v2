import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import Menu from "@/components/header/Menu";
import Footer from "@/components/footer/Footer";
import i18nConfig from "@/i18nConfig";
import { dir } from "i18next";
import TranslationsProvider from "@/components/TranslationProvider";
import initTranslations from "../i18n";
import { MenuProvider } from "../utils/hooks/MenuContext";
import { Providers } from "@/components/providers";

const bigilla = localFont({
  src: [
    {
      path: "./fonts/Bigilla.otf",
      weight: "normal",
      style: "normal",
    },
    {
      path: "./fonts/Bigilla-Bold.otf",
      weight: "normal",
      style: "bold",
    },
  ],
  variable: "--font-bigilla",
  preload: true,
  weight: "100 900",
  display: "swap",
});

export const melodrama = localFont({
  src: "./fonts/MelodramaVF.woff",
  preload: true,
  variable: "--font-melodrama",
  weight: "300 700",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
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

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params: { locale } }) {
  const { resources } = await initTranslations(locale, ["menu", "footer"]);
  return (
    <html
      lang={locale}
      dir={dir(locale)}
      className={`${melodrama.variable} ${bigilla.variable}`}
    >
      <body className={`${inter.className} bg-primary antialiased`}>
        <MenuProvider>
          <Providers>
            <TranslationsProvider
              resources={resources}
              locale={locale}
              namespaces={["menu", "footer"]}
            >
              <div className="pb-14">
                <Menu />
              </div>
              <SmoothScrolling>{children}</SmoothScrolling>
              <Footer />
            </TranslationsProvider>
          </Providers>
        </MenuProvider>
      </body>
    </html>
  );
}
