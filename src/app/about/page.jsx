"use client";
import Card from "@/components/about/hitsory/Card";
import React from "react";

const Page = () => {
  return (
    <div className="h-[300vh]">
      <div className="flex flex-col gap-10">
        <h1 className="text-6xl text-center">Mon histoire</h1>
        <p className="mt-16 text-2xl">
          Vous êtes curieux d'en savoir plus à mon sujet j'ai l'impression ?
          Comme vous m'êtes sympathique, je vais tout vous raconter. Chacun
          d'entre nous à un vécu.
        </p>
      </div>
      <Card
        text="Il faut bien un début à toute histoire. C'est à cette année que la mienne débute. N'ayez pas peur, je ne vais pas retracer chaque année de ma vie. Il est temps de passer au vif du sujet."
        title={"don de mes parents au monde"}
        year={"1988"}
      />
    </div>
  );
};

export default Page;
