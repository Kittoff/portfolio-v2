"use client";
import Card from "@/components/about/hitsory/Card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import SplitType from "split-type";

const history = [
  {
    text: "Il faut bien un début à toute histoire. C'est à cette année que la mienne débute. N'ayez pas peur, je ne vais pas retracer chaque année de ma vie. Il est temps de passer au vif du sujet.",
    title: "don de mes parents au monde",
    year: "1988",
  },
  {
    text: "Après des métiers alimentaires divers et variés, c'est à cette période que j'ai décidé de me lancer dans ce qui a toujour trotté dans ma tête. Le développement. Durant 10 mois, lors d'une reconversion professionnelle, j'ai appris les bases du développement ainsi que toute la partie conception. Dès ce moment-là, je savais que je voulais me lancer dans le développement Creative Dev.",
    year: "2018",
    title: "Formation Concepteur Développeur Informatique",
  },
  {
    text: "Dès l'obtention de mon diplôme, Capgemini m'a proposé un contrat, que j'ai bien sûr accepté. Pendant près de 5 ans, j'ai participé à des projets en relation avec l'aéronautique et le spatial. Sur chaque projet où je suis allé, j'ai toujours donné le meilleur de moi-même. Non seulement pour faire un travail le plus qualitatif possible, afin que mes collègues soient satisfaits, mais surtout pour être fier de ce que je pouvais donner.",
    year: "2019",
    title: "Software Engineer Capgemini",
  },
  {
    text: "Vous l'aurez compris, j'ai toujours eu un attrait particulier pour le développement plus créatif. C'est un aspect du développement qui n'était hélas pas présent, et c'est pourquoi aujourd'hui, je met l'expérience que j'ai acquise et ma passion pour le creative development au service de ceux qui me feront confiance.",
    year: "2024",
    title: "Développeur Freelance",
  },
];

const Page = () => {
  const container = useRef();
  const tl = useRef();

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
        );
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
                <div className="holder relative">Mon histoire</div>
              </div>
            </h1>
          </div>
          <p className="intro mt-16 text-step_p_1 opacity-0 md:w-2/3">
            Vous êtes curieux d'en savoir plus à mon sujet j'ai l'impression ?
            Comme vous m'êtes sympathique, je vais tout vous raconter. Chacun
            d'entre nous à un vécu.
          </p>
        </div>
        <div>
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
      </div>
    </div>
  );
};

export default Page;
