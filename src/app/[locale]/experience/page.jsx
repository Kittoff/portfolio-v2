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
        <div className="flex flex-col items-center gap-10 px-5 text-center text-secondary">
          <h2 className="pt-5 text-step_h_0">{t("experience_title")}</h2>
          <p className="max-w-[800px] text-left text-step_p_0">
            {t("experience_intro")}
          </p>
          <h3 className="text-step_h__2">{t("experience_subtitle")}</h3>
          <p className="max-w-[800px] text-left text-step_p_0">
            {t("experience_text")}
          </p>
          <p className="mb-20 text-left text-step_p__1">
            {t("experience_subtitle_projects")}
          </p>
        </div>

        <Experiences />
      </div>
    </TranslationsProvider>
  );
};

export default page;
