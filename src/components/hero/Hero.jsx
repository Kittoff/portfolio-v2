import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { Suspense, useEffect, useRef, useState } from "react";
import SplitType from "split-type";
import { Canvas } from "@react-three/fiber";
import GlassPortal from "../3d/GlassPortal";
import {
  CameraControls,
  Environment,
  Float,
  OrbitControls,
  Stage,
} from "@react-three/drei";

const Hero = () => {
  const tl = useRef();
  const name = useRef();
  const container = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, [isVisible]);

  useGSAP(
    () => {
      gsap.set(".wrapper", { autoAlpha: 1 });

      if (name.current) {
        let split = SplitType.create(".name", { splitTypeTypes: "chars" });

        // Set initial state for characters
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
    <div ref={container} className="">
      <main className="texte flex flex-col px-5 text-[70px] text-secondary md:items-center md:justify-around md:text-8xl lg:h-screen lg:flex-row">
        <div className="wrapper invisible flex flex-col items-center gap-8 lg:w-2/3">
          <div>
            <h1 className="job text-3xl text-customGrey opacity-0">
              Freelance Developer
            </h1>
          </div>
          <div
            ref={name}
            className="name flex flex-col items-center font-melodrama text-step_h_1 md:text-step_h_2"
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
              <div className="join flex gap-2">
                <div className="h-4 w-4 rounded-full border-3 border-green-600 bg-green-400" />
                <div className="text-xs text-customGrey">
                  Disponible pour projets
                </div>
              </div>

              <p className="join text-xs md:w-1/2 lg:w-2/3">
                Développeur Front-End passioné par le Creative Dev et avide
                d'apprendre. J'aime relever des défis, partager avec les autres,
                et voir la finalité d'un projet qui satisfait à la fois le
                client mais aussi moi-même.
              </p>
              <div className="join w-full rounded-bl-[30px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[30px] bg-customBlue py-3 text-center text-xs text-white md:w-1/2 lg:w-2/3">
                Rejoignons-nous
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-screen w-screen md:w-1/3"
          // style={{ width: "25vw", height: "100vh" }}
        >
          {isVisible && (
            <Suspense fallback={"loading"}>
              <Canvas
                camera={{ position: [1.5, 0, 3], fov: 75 }}
                resize={{ scroll: false }}
              >
                {/* <color attach="background" args={["#111111"]} /> */}
                <Environment preset="lobby" />
                <Stage>
                  <Float
                    speed={1} // Animation speed, defaults to 1
                    rotationIntensity={1} // XYZ rotation intensity, defaults to 1
                    floatIntensity={0.5} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                    floatingRange={[0, 0.5]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                  >
                    <GlassPortal />
                  </Float>
                </Stage>
                <OrbitControls
                  enableZoom={false}
                  maxPolarAngle={Math.PI / 1.7} // Limite l'angle vertical (90 degrés)
                  minPolarAngle={Math.PI / 3.5}
                  maxAzimuthAngle={Math.PI / 6}
                  minAzimuthAngle={-Math.PI / 6}
                />
                {/* <CameraControls
              distance={4}
              maxPolarAngle={Math.PI / 1.5} // Limite l'angle vertical (90 degrés)
              minPolarAngle={0} // Limite l'angle vertical (0 degré)
              maxAzimuthAngle={Math.PI / 2} // Limite l'angle horizontal (90 degrés)
              minAzimuthAngle={-Math.PI / 2} // Limite l'angle horizontal (-90 degrés)
            /> */}
              </Canvas>
            </Suspense>
          )}
        </div>
      </main>
    </div>
  );
};

export default Hero;
