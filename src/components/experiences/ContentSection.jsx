"use client";

import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import SplitType from "split-type";

const ContentSection = ({
  bgColor,
  offset,
  imgSrc,
  title,
  text,
  id,
  subtitle,
  highlightWord,
}) => {
  const tl = useRef();
  const containerRef = useRef();
  const hxRef = useRef();

  const renderText = (text, highlightWord) => {
    if (!highlightWord) return text;

    // Convertir highlightWord en tableau s'il ne l'est pas déjà
    const wordsToHighlight = Array.isArray(highlightWord)
      ? highlightWord
      : [highlightWord];

    let modifiedText = text;

    // Appliquer le highlighting pour chaque mot du tableau
    wordsToHighlight.forEach((word) => {
      if (word && text.includes(word)) {
        // Regex pour mettre en surbrillance le mot
        const regex = new RegExp(`(${word})(?=\\s+|$|[,.])`, "g");
        modifiedText = modifiedText.replace(
          regex,
          "<span class='hx highlight'>$1</span>",
        );

        // Vérifier si le mot est suivi d'un autre mot (pas de ponctuation)
        const spaceRegex = new RegExp(
          `(<span class='hx highlight'>${word}</span>)(?=\\s+\\w)`,
          "g",
        );
        modifiedText = modifiedText.replace(
          spaceRegex,
          "$1<span style='margin-right: 10px;'></span>", // Ajoute un espace avec marge à droite
        );
      }
    });

    return <p ref={hxRef} dangerouslySetInnerHTML={{ __html: modifiedText }} />;
  };

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      if (hxRef.current) {
        const chars = SplitType.create(hxRef.current, {
          splitTypeTypes: "chars",
        });
        tl.current = gsap
          .timeline({
            defaults: { duration: 0.4, ease: "power1" },
            scrollTrigger: {
              trigger: ".hx",
              start: "top bottom",
              toggleActions: "restart none none reset", // Ajout de toggleActions
              once: false, // S'assure que l'animation peut se répéter
            },
          })
          .fromTo(
            ".hx",
            {
              scale: 0,
            },
            {
              duration: 0.8,
              ease: "expo",
              scale: 1,
            },
          );

        const highlightedElements = hxRef.current.querySelectorAll(".hx");

        highlightedElements.forEach((el) => {
          const chars = SplitType.create(el, { splitTypeTypes: "chars" });

          // Animation pour chaque caractère
          tl.current.fromTo(
            chars.chars, // Utiliser chars.chars pour cibler les caractères
            { scale: 1.3, opacity: 0 },
            { scale: 1, opacity: 1 },
          );
        });
      }
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className={`sticky top-0 flex h-screen flex-col content-center items-center justify-center ${bgColor}`}
      style={{ top: offset }}
    >
      <h2 className="max-w-[500px] text-[clamp(2rem,6vw,5rem)] font-normal uppercase leading-none tracking-tighter">
        <sup>{id}</sup> {title}
      </h2>
      <h4 className="text-center text-step_p__1">{subtitle}</h4>
      <div className="backface-hidden max-w-[950px] p-6 text-left text-step_p_3 leading-normal">
        {renderText(text, highlightWord)}
      </div>
    </div>
  );
};

export default ContentSection;
