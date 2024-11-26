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

const Hero = () => {
  const { t } = useTranslation();
  const tl = useRef();
  const name = useRef();
  const container = useRef();
  const [isVisible, setIsVisible] = useState(false);

  // Utiliser le custom hook pour contrôler le scroll
  const { unlockScroll } = useScrollControl();

  useEffect(() => {
    // Afficher le contenu après un délai
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
              <a
                className="join w-full cursor-pointer rounded-bl-[30px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[30px] bg-customBlue py-3 text-center text-xs text-white md:w-1/2 lg:w-2/3"
                href="mailto:"
              >
                <button type="button">{t("hero_join")}</button>
              </a>
            </div>
          </div>
        </div>
        <div className="h-[400px] md:w-1/3 lg:h-screen">
          {isVisible && (
            <Suspense fallback={"loading"}>
              <Canvas
                camera={{ position: [1.5, 0, 3], fov: 75 }}
                resize={{ scroll: false }}
              >
                <Environment preset="lobby" />
                <Stage>
                  <Float
                    speed={1}
                    rotationIntensity={1}
                    floatIntensity={0.5}
                    floatingRange={[0.2, 0.5]}
                  >
                    <PresentationControls
                      global={false}
                      polar={[-Math.PI / 9, Math.PI / 9]}
                      azimuth={[-Math.PI / 12, Math.PI / 4]}
                    >
                      <GlassPortal />
                    </PresentationControls>
                  </Float>
                </Stage>
              </Canvas>
            </Suspense>
          )}
        </div>
      </main>
    </div>
  );
};

export default Hero;
