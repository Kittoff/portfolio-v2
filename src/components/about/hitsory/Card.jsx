"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Card = ({ year, title, text }) => {
  const paragraphRef = useRef(null);
  const containerRef = useRef(null);
  const tl = useRef();

  useGSAP(
    () => {
      if (paragraphRef.current) {
        // new BlurScrollEffect(paragraphRef.current);
        let splitParagraph = SplitType.create(".paragraph", {
          splitTypeTypes: "chars",
        });

        gsap.fromTo(
          splitParagraph.chars,
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
              trigger: paragraphRef.current,
              start: "top bottom-=15%",
              end: "bottom center+=15%",
              scrub: true,
            },
          }
        );
      }

      // Split the title into characters
      //   const split = new SplitText(".title", { type: "chars" });
      let split = SplitType.create(".title", { splitTypeTypes: "chars" });
      gsap.set(split.chars, { y: 50, autoAlpha: 1 });
      gsap.set(".year", { y: 50 });

      // Create a new timeline
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".title",
            markers: true,
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
        .to(
          split.chars,
          {
            duration: 0.2,
            y: 0,
            stagger: 0.02,
            ease: "expo.out",
          },
          "-=0.3"
        );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="mt-32">
      <div className="flex items-end gap-5 md:gap-24">
        <div className="text-4xl">
          <div className="link-clip-path">
            <div className="holder relative">
              <div className="year">{year}</div>
            </div>
          </div>
        </div>
        <div className="link-clip-path">
          <div className="holder relative">
            <div className="title">{title}</div>
          </div>
        </div>
      </div>
      <div className="h-[0.12rem] w-full bg-black opacity-50 mb-8" />
      <div
        ref={paragraphRef}
        className="paragraph bg-red-500 break-words text-lg"
      >
        {text}
      </div>
    </div>
  );
};

export default Card;
