"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import SplitType from "split-type";

const Card = ({ year, title, text, classname, index }) => {
  const paragraphRef = useRef(null);
  const containerRef = useRef(null);
  const titleRef = useRef(null); // Ajout d'une référence pour le titre
  const tl = useRef();

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const splitParagraph = SplitType.create(paragraphRef.current, {
        splitTypeTypes: "words",
      });

      gsap.fromTo(
        splitParagraph.words,
        {
          scaleY: 0.1,
          scaleX: 1.8,
          filter: "blur(10px) brightness(50%)",
          willChange: "filter, transform",
        },
        {
          ease: "none",
          scaleY: 1,
          scaleX: 1,
          filter: "blur(0px) brightness(100%)",
          stagger: 0.05,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom-=30%",
            end: "bottom center+=15%",
            scrub: true,
          },
        }
      );

      const splitTitle = SplitType.create(titleRef.current, {
        splitTypeTypes: "chars",
      });
      gsap.set(splitTitle.chars, { y: 50, autoAlpha: 1 });
      gsap.set(".year", { y: 50 });

      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 25%",
          },
        })
        .to(".year", {
          duration: 0.5,
          y: 0,
          autoAlpha: 1,
          ease: "back.out(0.6)",
        })
        .to(splitTitle.chars, {
          duration: 0.2,
          y: 0,
          stagger: 0.02,
          ease: "expo.out",
        });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={`${classname} mt-40 flex flex-col items-center`}
    >
      <div className="flex items-end gap-6 md:gap-44 w-full">
        <div className="text-4xl">
          <div className="link-clip-path">
            <div className="holder relative">
              <div className="year">{year}</div>
            </div>
          </div>
        </div>
        <div className="link-clip-path">
          <div className="holder relative text-step_p_1">
            <div ref={titleRef} className="title">
              {title}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[0.12rem] w-full bg-slate-500 opacity-50 mb-8" />
      <div
        ref={paragraphRef}
        className="paragraph break-words text-lg md:w-[500px] "
      >
        {text}
      </div>
    </div>
  );
};
export default Card;
