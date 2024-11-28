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

export async function generateMetadata({ params: { locale } }) {
  const { t } = await initTranslations(locale, ["metadata"]);

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),
    title: {
      default: "Christophe Lozano • Freelance Developer",
      // template,
    },
    openGraph: {
      description: t("metadata_description"),
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
}

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }) {
  const { resources } = initTranslations(locale, ["menu", "footer"]);
  return (
    <html
      lang={locale}
      dir={dir(locale)}
      className={`${melodrama.variable} ${bigilla.variable}`}
    >
      <body className={`${inter.className} bg-primary antialiased`}>
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
      </body>
    </html>
  );
}
