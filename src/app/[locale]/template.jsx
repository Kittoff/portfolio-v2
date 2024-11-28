"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

export default function Template({ children }) {
  const container = useRef(null);
  const tl = useRef();
  const firstLayer = useRef(null);

  useGSAP(
    () => {
      tl.current = gsap.timeline({}).fromTo(
        firstLayer.current,
        { y: 0 },
        {
          y: "-100%",
          duration: 0.5,
          ease: "circ.inOut",
          delay: 1,
        },
      );
    },
    { scope: container },
  );

  return (
    <div ref={container}>
      {" "}
      <main>{children}</main>
      <div
        ref={firstLayer}
        className="fixed inset-0 z-50 translate-y-full bg-red-300"
      />
    </div>
  );
}
