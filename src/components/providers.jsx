"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { TransitionRouter } from "next-transition-router";
import { useMenuContext } from "@/utils/MenuContext";
import Loader from "@/utils/loader/Loader";

export function Providers({ children }) {
  const firstLayer = useRef(null);
  const secondLayer = useRef(null);
  const { isMenuClosedCompletely } = useMenuContext();

  return (
    <TransitionRouter
      auto={true}
      leave={(next) => {
        const tl = gsap
          .timeline({
            onComplete: next,
          })
          .fromTo(
            firstLayer.current,
            { y: "100%" },
            {
              y: 0,
              duration: 0.5,
              ease: "circ.inOut",
            },
          )
          .fromTo(
            secondLayer.current,
            { y: "100%" },
            {
              y: 0,
              duration: 0.5,
              ease: "circ.inOut",
            },
            "<50%",
          );

        return () => {
          tl.kill();
        };
      }}
      enter={(next) => {
        if (isMenuClosedCompletely) {
          const tl = gsap
            .timeline()
            .fromTo(
              secondLayer.current,
              { y: 0 },
              {
                y: "-100%",
                duration: 0.5,
                ease: "circ.inOut",
              },
            )
            .fromTo(
              firstLayer.current,
              { y: 0 },
              {
                y: "-100%",
                duration: 0.5,
                ease: "circ.inOut",
              },
              "<50%",
            )
            .call(next, undefined, "<50%");
          return () => {
            tl.kill();
          };
        }
      }}
    >
      <main>{children}</main>

      <div
        ref={firstLayer}
        className="fixed inset-0 z-50 flex translate-y-full items-center justify-center bg-[#69a4b4]"
      >
        <Loader />
      </div>

      <div
        ref={secondLayer}
        className="fixed inset-0 z-50 flex translate-y-full items-center justify-center bg-[#5a729e]"
      >
        <Loader />
      </div>
    </TransitionRouter>
  );
}
