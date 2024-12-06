"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { Suspense, useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import { Canvas } from "@react-three/fiber";
import GlassPortal from "../3d/GlassPortal";
import {
  Environment,
  Float,
  OrbitControls,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import { useTranslation } from "react-i18next";
import useScrollControl from "@/utils/useScrollControl";
import Loader from "@/utils/loader/Loader";
import Link from "next/link";
import RevealImage from "../RevealImage";

const Hero = () => {
  const { t } = useTranslation();
  const tl = useRef();
  const name = useRef();
  const container = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [revealProgress, setRevealProgress] = useState(0);

  // Utiliser le custom hook pour contrôler le scroll
  const { unlockScroll, lockScroll } = useScrollControl();

  useEffect(() => {
    // Afficher le contenu après un délai
    lockScroll();
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(
    () => {
      gsap.set(".wrapper", { autoAlpha: 1 });

      if (name.current) {
        let split = SplitType.create(".name", { splitTypeTypes: "chars" });

        // Set initial state for characters
        gsap.set(split.chars, { y: "105%" });
        gsap.set(".job", { y: 10 });

        tl.current = gsap
          .timeline()
          .to(split.chars, {
            y: 0,
            duration: 1.3,
            stagger: 0.03,
            ease: "expo.out",
          })
          .to(
            ".job",
            {
              opacity: 1,
              duration: 1,
              y: 0,
            },
            "<+2",
          )
          .from(
            ".join",
            {
              opacity: 0,
              y: 50,
              duration: 0.7,
              stagger: 0.16,
            },
            "<-0.4",
          )
          .eventCallback("onComplete", unlockScroll); // Appeler unlockScroll une fois les animations terminées
      }
    },
    { scope: container },
  );

  const join = () => {
    window.location = "mailto:xyz@yourapplicationdomain.com";
  };
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

  useEffect(() => {
    let frameId;
    const startTime = performance.now();

    const animateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / 4000, 0.7); // Durée de 2 secondes pour aller de 0 à 1
      setRevealProgress(progress);

      if (progress < 1) {
        frameId = requestAnimationFrame(animateProgress);
      }
    };

    frameId = requestAnimationFrame(animateProgress);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div ref={container} className="">
      <main className="texte flex flex-col px-5 text-[70px] text-secondary md:items-center md:justify-around md:text-8xl lg:h-screen lg:flex-row">
        <div className="wrapper invisible flex flex-col items-center gap-8 lg:w-2/3">
          <div>
            <h1 className="job text-step_1 text-customGrey opacity-0">
              Freelance Developer
            </h1>
          </div>
          <div
            ref={name}
            className="name flex flex-col items-center font-melodrama text-step_h_1 md:text-step_h_2"
          >
            <div className="link-clip-path">
              <div className="holder relative">
                <span>{t("hero_name")}</span>
              </div>
            </div>
            <div className="link-clip-path">
              <div className="holder relative">
                <span>{t("hero_lastname")}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-4">
              <div className="join flex gap-2">
                <div className="h-4 w-4 rounded-full border-3 border-green-600 bg-green-400" />
                <div className="text-xs text-customGrey">
                  {t("hero_available")}
                </div>
              </div>

              <p className="join text-xs md:w-1/2 lg:w-2/3">
                {t("hero_intro")}
              </p>

              <div
                onMouseEnter={() => handleMouseEnter(".hero-animation")}
                onMouseLeave={() => handleMouseLeave(".hero-animation")}
                className="join w-full cursor-pointer overflow-hidden rounded-bl-[30px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[30px] border border-customBlue text-center text-xs text-secondary md:w-1/2 lg:w-2/3"
              >
                <Link
                  href="/contact"
                  className="relative flex cursor-pointer items-center justify-center rounded-full rounded-bl-[30px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[30px] px-5 py-5"
                >
                  <div className="hero-animation absolute top-[100%] h-80 w-[110%] rounded-full bg-customBlue"></div>
                  <span className="z-[2]">
                    <span className="text-step_p_0">{t("hero_join")}</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[400px] items-center justify-center md:w-1/3 lg:h-screen">
          {isVisible && (
            <Suspense fallback={null}>
              <Canvas>
                <RevealImage
                  imageTexture={"./image.jpg"}
                  revealProgress={revealProgress}
                />
              </Canvas>
            </Suspense>
          )}
        </div>
      </main>
    </div>
  );
};

export default Hero;
