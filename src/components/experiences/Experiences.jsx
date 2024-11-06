"use client";

import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

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

    // Si aucun mot à mettre en évidence, retourner le texte tel quel
    if (wordsToHighlight.length === 0) return text;

    let modifiedText = text;

    // Appliquer le highlighting pour chaque mot du tableau
    wordsToHighlight.forEach((word) => {
      if (word && text.includes(word)) {
        const regex = new RegExp(word, "g");
        modifiedText = modifiedText.replace(
          regex,
          "<span class='hx highlight'>$&</span>",
        );
      }
    });

    return <p ref={hxRef} dangerouslySetInnerHTML={{ __html: modifiedText }} />;
  };

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      if (hxRef.current) {
        tl.current = gsap
          .timeline({
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

const Experience = () => {
  const sections = [
    {
      bgColor: "bg-[#dfd6cf]",
      id: "01",
      offset: "0rem",
      imgSrc: "img/1.png",
      title: "XDog",
      subtitle:
        "Serveur Multi Mission Coverage Management pour Pléiades / Astroterra Et les futurs satellites d’observation de la terre.",
      text: "Conceptualiser et intégrer une interface pour Airbus afin de récupérer des données d'images satellites dans une zone définie par l'utilisateur.",
      highlightWord: ["Airbus"],
    },
    {
      bgColor: "bg-[#c5c3c0]",
      id: "02",
      offset: "2rem",
      imgSrc: "img/2.png",
      title: "Walk",
      subtitle: "gestion de maintenance moteur Safran",
      text: "Conceptualiser et intégrer un outil de maintenance de moteurs d'avions à destination des techniciens Safran.",
      highlightWord: ["Safran"],
    },
    {
      bgColor: "bg-[#dfd6cf]",
      id: "03",
      offset: "4rem",
      imgSrc: "img/3.png",
      title: "MyCM",
      subtitle: "Gestion humaine",
      text: "Une grande entreprise a besoin d'outil afin de gérer au mieux les relations humaines entre collaborateurs. je me suis occupé de l'intégration de la logique métier à destination des services RH Capgemini.",
      highlightWord: ["Capgemini"],
    },
    {
      bgColor: "bg-[#c5c3c0]",
      id: "04",
      offset: "6rem",
      imgSrc: "img/4.png",
      title: "Skywise",
      subtitle: "gestion de flote aéronautique",
      text: "Intégration de nouvelles interfaces, pour Airbus, à partir de maquettes UI/UX, à destination des compagnie aériennes afin de gérer au mieux la maintenance de leurs avions.",
      highlightWord: ["Airbus"],
    },
    {
      bgColor: "bg-[#dfd6cf]",
      id: "05",
      offset: "8rem",
      imgSrc: "img/5.png",
      title: "Mars2020",
      subtitle: "interface utilisateur pour mission Perseverance sur Mars",
      text: "Implémentation de nouvelles interfaces à destination des scientifiques du CNES et de la NASA afin d'envoyer des ordres de missions au robot Perseverance, présent sur Mars.",
      highlightWord: ["CNES", "NASA"],
    },
  ];

  return (
    <div className="wrap bg-red-300">
      {sections.map((section, index) => (
        <ContentSection key={index} {...section} />
      ))}
    </div>
  );
};

export default Experience;
