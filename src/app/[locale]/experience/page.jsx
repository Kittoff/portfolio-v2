import Experiences from "@/components/experiences/Experiences";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationProvider";

const page = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, ["experiences"]);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={["experiences"]}
    >
      <div>
        <Experiences />
      </div>
    </TranslationsProvider>
  );
};

export default page;
