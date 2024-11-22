import Hero from "@/components/hero/Hero";
import TranslationsProvider from "@/components/TranslationProvider";
import initTranslations from "../i18n";

export default async function Home({ params: { locale } }) {
  const { resources } = await initTranslations(locale, ["hero"]);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={["hero"]}
    >
      <div>
        <Hero />
      </div>
    </TranslationsProvider>
  );
}
