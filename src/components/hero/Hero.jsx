import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import SplitType from "split-type";

const Hero = () => {
  const tl = useRef();
  const name = useRef();
  const container = useRef();
  useGSAP(
    () => {
      gsap.set(".wrapper", { autoAlpha: 1 });

      if (name.current) {
        let split = SplitType.create(".name", { splitTypeTypes: "chars" });

        //     // Set initial state for characters
        gsap.set(split.chars, { y: "100%" });
        gsap.set(".job", { y: 10 });

        tl.current = gsap
          .timeline({ delay: 0.3 })
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
          );
      }
    },
    { scope: container },
  );
  return (
    <div ref={container}>
      <main className="texte flex h-screen flex-col text-step_h_1 md:items-center md:justify-around lg:flex-row">
        <div className="wrapper invisible flex flex-col items-center lg:w-2/3">
          <div>
            <h1 className="job text-step_h__2 text-customGrey opacity-0">
              Freelance Developer
            </h1>
          </div>
          <div
            ref={name}
            className="name flex flex-col items-center font-melodrama"
          >
            <div className="link-clip-path">
              <div className="holder relative">
                <span>Christophe</span>
              </div>
            </div>
            <div className="link-clip-path">
              <div className="holder relative">
                <span>LOZANO</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-4">
              <div className="join mt-3 flex gap-2">
                <div className="h-4 w-4 rounded-full border-3 border-green-600 bg-green-400" />
                <div className="text-xs text-customGrey">
                  Disponible pour projets
                </div>
              </div>

              <p className="join text-xs md:w-1/2 lg:w-2/3">
                Développeur Front-End passioné par le Creative Dev et avide
                d'apprendre.J'aime relever des défis, partager avec les autres,
                et voir la finalité d'un projet qui satisfait à la fois le
                client mais aussi moi-même.
              </p>
              <div className="join w-full rounded-bl-[30px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[30px] bg-customBlue py-3 text-center text-xs text-white md:w-1/2 lg:w-2/3">
                Rejoignons-nous
              </div>
            </div>
          </div>
        </div>
        <div>coucou</div>
      </main>
    </div>
  );
};

export default Hero;
