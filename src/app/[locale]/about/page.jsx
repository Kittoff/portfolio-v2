import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationProvider";
import About from "@/components/about/About";

export default async function Home({ params: { locale } }) {
  const { resources } = await initTranslations(locale, ["about"]);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={["about"]}
    >
      <div>
        <About />
      </div>
    </TranslationsProvider>
  );
}
