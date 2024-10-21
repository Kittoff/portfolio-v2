"use client";
import Card from "@/components/about/hitsory/Card";
import React from "react";

const history = [
  {
    text: "Il faut bien un début à toute histoire. C'est à cette année que la mienne débute. N'ayez pas peur, je ne vais pas retracer chaque année de ma vie. Il est temps de passer au vif du sujet.",
    title: "don de mes parents au monde",
    year: "1988",
  },
  {
    text: "deuxième texte qui retrace mes exploits tadadi tadada",
    year: "2012",
    title: "coucoucou",
  },
  {
    text: "Il faut bien un début à toute histoire. C'est à cette année que la mienne débute. N'ayez pas peur, je ne vais pas retracer chaque année de ma vie. Il est temps de passer au vif du sujet.",
    title: "don de mes parents au monde",
    year: "2019",
    title: "coucoucoferferfu",
  },
];

const Page = () => {
  return (
    <div className="h-[300vh]">
      <div className="flex flex-col gap-10">
        <h1 className="text-6xl text-center mt-16">Mon histoire</h1>
        <p className="mt-16 text-2xl">
          Vous êtes curieux d'en savoir plus à mon sujet j'ai l'impression ?
          Comme vous m'êtes sympathique, je vais tout vous raconter. Chacun
          d'entre nous à un vécu.
        </p>
      </div>
      {history.map((item, index) => (
        <Card
          classname={"card"}
          key={index}
          text={item.text}
          title={item.title}
          year={item.year}
          index={index} // Passer l'index pour l'utiliser dans le ScrollTrigger
        />
      ))}
    </div>
  );
};

export default Page;
