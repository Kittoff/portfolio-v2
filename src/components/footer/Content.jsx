"use client";
import React, { useRef } from "react";
import Time from "./Time";
import Delimiter from "../Delimiter";
import { useTranslation } from "react-i18next";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Content({ pathname }) {
  return (
    <div
      className={`absolute bottom-0 flex h-full w-full flex-col justify-between bg-footer px-6 py-8 text-primary md:px-12`}
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

const FooterTitle = () => {
  return (
    <div className="lg:px-96">
      <Nav />
    </div>
  );
};

const ContactInfos = () => {
  const container = useRef(null);

  const handleMouseEnter = (selector) => {
    gsap.to(selector, {
      y: "-50%",
    });
  };

  const handleMouseLeave = (selector) => {
    gsap.to(selector, {
      y: "-200%",
      onComplete: () => gsap.set(selector, { y: "100%" }),
    });
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+33769194855";
  };

  const handleMailClick = () => {
    window.location.href = "mailto:info@christophelozano.com";
  };

  return (
    <div
      ref={container}
      className="flex h-40 flex-col justify-evenly overflow-hidden md:h-20 md:w-3/4 md:flex-row md:content-start md:justify-normal md:gap-11 lg:px-96"
    >
      <div
        onMouseEnter={() => handleMouseEnter(".email-animation")}
        onMouseLeave={() => handleMouseLeave(".email-animation")}
        onClick={handleMailClick}
      >
        <a
          href="mailto:info@christophelozano.com"
          className="relative flex cursor-pointer items-center justify-center overflow-hidden rounded-full border border-footer_button px-5 py-5"
        >
          <div className="email-animation absolute top-[100%] h-80 w-72 rounded-full bg-footer_button"></div>
          <span className="z-[2]">
            <span>info@christophelozano.com</span>
          </span>
        </a>
      </div>
      {/* <div
        onMouseEnter={() => handleMouseEnter(".phone-animation")}
        onMouseLeave={() => handleMouseLeave(".phone-animation")}
        onClick={handlePhoneClick}
      >
        <a
          href="tel:+33769194855"
          className="relative flex cursor-pointer items-center justify-center overflow-hidden rounded-full border border-footer_button px-5 py-5"
        >
          <div className="phone-animation absolute top-[100%] h-80 w-80 rounded-full bg-footer_button"></div>
          <span className="z-[2]">
            <span>+33 7 69 19 48 55</span>
          </span>
        </a>
      </div> */}
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
          <h3 className="text-step_p__1 uppercase text-primary">Version</h3>
          <p className="flex">{getYear()} © Edition</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-step_p__1 uppercase text-primary">Local Time</h3>
          <Time />
        </div>
      </div>
    </div>
  );
};

const Nav = () => {
  const { t } = useTranslation();

  return (
    <div className="shrink-1 mt-28 flex gap-20">
      <h2 className="flex flex-col items-start text-step_h_0">
        <div className="flex items-center gap-1">
          <div className="h-8 w-8 rounded-full bg-menuBg" />
          {t("footer:footer_work")}
        </div>
        <div>{t("footer:footer_together")}</div>
      </h2>
    </div>
  );
};
