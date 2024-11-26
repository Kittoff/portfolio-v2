"use client";
import React from "react";
import ContentSection from "./ContentSection";
// import { sections } from "./sections";
// import { useTranslation } from "react-i18next";
import TranslationsProvider from "../TranslationProvider";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  const sections = [
    {
      bgColor: "bg-[#4b565d]",
      id: "01",
      offset: "0rem",
      imgSrc: "img/1.png",
      title: "XDog",
      subtitle: t("xdog_description"),
      text: t("xdog_text"),
      highlightWord: ["Airbus"],
    },
    {
      bgColor: "bg-[#84a5a4]",
      id: "02",
      offset: "2rem",
      imgSrc: "img/2.png",
      title: "Walk",
      subtitle: t("walk_description"),
      text: t("walk_text"),
      highlightWord: ["Safran"],
    },
    {
      bgColor: "bg-[#4b565d]",
      id: "03",
      offset: "4rem",
      imgSrc: "img/3.png",
      title: "MyCM",
      subtitle: t("mycm_description"),
      text: t("mycm_text"),
      highlightWord: ["Capgemini"],
    },
    {
      bgColor: "bg-[#84a5a4]",
      id: "04",
      offset: "6rem",
      imgSrc: "img/4.png",
      title: "Skywise",
      subtitle: t("skywise description"),
      text: t("skywise_text"),
      highlightWord: ["Airbus"],
    },
    {
      bgColor: "bg-[#4b565d]",
      id: "05",
      offset: "8rem",
      imgSrc: "img/5.png",
      title: "Mars2020",
      subtitle: t("mars2020_description"),
      text: t("mars2020_text"),
      highlightWord: ["CNES", "NASA"],
    },
  ];

  return (
    <div className="wrap">
      {sections.map((section, index) => (
        <ContentSection key={index} {...section} />
      ))}
    </div>
  );
};

export default Experience;
