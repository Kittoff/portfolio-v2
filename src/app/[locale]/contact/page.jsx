import initTranslations from "@/app/i18n";
import Contact from "@/components/contact/Contact";
import TranslationsProvider from "@/components/TranslationProvider";
import React from "react";

const page = async ({ params: { locale } }) => {
  const { resources } = await initTranslations(locale, ["contact"]);
  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={["contact"]}
    >
      <Contact />
    </TranslationsProvider>
  );
};

export default page;
