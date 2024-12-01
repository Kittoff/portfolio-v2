import React from "react";
import Time from "./Time";
import Delimiter from "../Delimiter";
import { useTranslation } from "react-i18next";

export default function Content({ pathname }) {
  return (
    <div
      className={`absolute bottom-0 flex h-full w-full flex-col justify-between bg-footer px-6 py-8 text-secondary md:px-12`}
    >
      {!pathname.endsWith("/contact") && (
        <>
          <FooterTitle />
          <ContactInfos />
        </>
      )}
      <Copyright />
    </div>
  );
}

const FooterTitle = ({ text }) => {
  return (
    <div className="lg:px-40">
      <Nav />
    </div>
  );
};

const ContactInfos = () => {
  const handlePhoneClick = () => {
    window.location.href = "tel:+33769194855";
  };
  const handleMailClick = () => {
    window.location.href = "mailto:info@christophelozano.com";
  };
  return (
    <div className="flex h-40 flex-col justify-evenly overflow-hidden md:h-20 md:w-3/4 md:flex-row md:content-start md:justify-normal md:gap-11 lg:px-40">
      <div
        onClick={handleMailClick}
        className="bg-footer_button flex cursor-pointer items-center justify-center rounded-full px-5 py-5 md:py-1"
      >
        <a href="mailto:info@christophelozano.com">info@christophelozano.com</a>
      </div>
      <div
        onClick={handlePhoneClick}
        className="bg-footer_button flex cursor-pointer items-center justify-center rounded-full px-5 py-5 md:py-1"
      >
        <a className="w-max" href="tel:+33769194855">
          +33 7 69 19 48 55
        </a>
      </div>
    </div>
  );
};

const Copyright = () => {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };
  return (
    <div className="flex shrink-0 flex-col justify-between">
      <Delimiter />
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="text-step_p__1 uppercase text-[#ffffff80]">Version</h3>
          <p className="flex">{getYear()} © Edition</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-step_p__1 uppercase text-[#ffffff80]">
            Local Time
          </h3>
          <Time />
        </div>
      </div>
    </div>
  );
};

const Nav = ({}) => {
  const { t } = useTranslation();
  return (
    <div className="shrink-1 mt-28 flex gap-20">
      <h2 className="flex flex-col items-start text-step_h_0">
        <div className="flex items-center gap-1">
          <div className="h-8 w-8 rounded-full bg-red-300" />
          {t("footer:footer_work")}
        </div>
        <div>{t("footer:footer_together")}</div>
      </h2>
    </div>
  );
};
