"use client";
import Card from "@/components/about/hitsory/Card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import { useTranslation } from "react-i18next";
import useScrollControl from "@/utils/useScrollControl";

const About = () => {
  const container = useRef();
  const tl = useRef();
  const { t } = useTranslation();
  const { unlockScroll, lockScroll } = useScrollControl();
  const history = [
    {
      text: t("about_1988_text"),
      title: t("about_1988_title"),
      year: "1988",
    },
    {
      text: t("about_2018_text"),
      year: "2018",
      title: t("about_2018_title"),
    },
    {
      text: t("about_2019_text"),
      year: "2019",
      title: t("about_2019_title"),
    },
    {
      text: t("about_2024_text"),
      year: "2024",
      title: t("about_2024_title"),
    },
  ];

  useEffect(() => {
    lockScroll();
  }, []);

  useGSAP(
    () => {
      gsap.set(".wrapper", { autoAlpha: 1 });
      gsap.set(".intro", { y: 50 });
      let split = SplitType.create(".history", { splitTypeTypes: "chars" });
      gsap.set(split.chars, { y: "100%" });

      tl.current = gsap
        .timeline({ delay: 0.6 })
        .to(split.chars, {
          y: 0,
          duration: 1.3,
          stagger: 0.03,
          ease: "power4.inOut",
        })
        .to(
          ".intro",
          {
            opacity: 1,
            duration: 0.8,
            y: 0,
            ease: "power4.inOut",
          },
          "+0.6 ",
        )
        .eventCallback("onComplete", unlockScroll); // Appeler unlockScroll une fois les animations terminées
    },
    { scope: container },
  );
  return (
    <div ref={container} className="px-5 text-secondary">
      <div className="wrapper invisible mb-80">
        <div className="flex h-screen flex-col items-center gap-10">
          <div></div>
          <div className="history">
            <h1 className="mt-16 text-center text-step_h_0">
              <div className="link-clip-path">
                <div className="holder relative">{t("about_title")}</div>
              </div>
            </h1>
          </div>
          <p className="intro mt-16 text-step_p_1 opacity-0 md:w-2/3">
            {t("about_intro")}
          </p>
        </div>
        <div>
          {history.map((item, index) => (
            <Card
              classname={"card"}
              key={index}
              text={t(item.text)}
              title={t(`${item.title}`)}
              year={item.year}
              index={index} // Passer l'index pour l'utiliser dans le ScrollTrigger
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
