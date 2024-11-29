"use client";
import React, { useRef } from "react";
import ContentSection from "./ContentSection";
import { useTranslation } from "react-i18next";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useScrollControl from "@/utils/useScrollControl";

const Experience = () => {
  const { t } = useTranslation();
  const { unlockScroll } = useScrollControl();
  const container = useRef(null);
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
      subtitle: t("skywise_description"),
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

  useGSAP(
    () => {
      gsap.set(".content", { autoAlpha: 1 });

      gsap
        .fromTo(
          ".content-item",
          { y: 100, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            stagger: 0.2, // Délai entre chaque élément
            duration: 1,
            ease: "power3.out", // Fonction d'ease pour une animation plus fluide
            delay: 0.6, // Délai de départ de l'animation
          },
        )
        .eventCallback("onComplete", unlockScroll); // Appeler unlockScroll une fois les animations terminées;
    },
    { scope: container },
  );

  return (
    <div ref={container} className="wrap">
      <div className="content invisible flex flex-col items-center gap-10 px-5 text-center text-secondary">
        <h2 className="content-item pt-5 text-step_h_0">
          {t("experience_title")}
        </h2>
        <p className="content-item max-w-[800px] text-left text-step_p_0">
          {t("experience_intro")}
        </p>
        <h3 className="content-item text-step_h__2">
          {t("experience_subtitle")}
        </h3>
        <p className="content-item max-w-[800px] text-left text-step_p_0">
          {t("experience_text")}
        </p>
        <p className="content-item mb-20 text-left text-step_p__1">
          {t("experience_subtitle_projects")}
        </p>
      </div>
      {sections.map((section, index) => (
        <ContentSection key={index} {...section} />
      ))}
    </div>
  );
};

export default Experience;
