// components/TextAnimation.js
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TextAnimation = ({ text }) => {
  const containerRef = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      const spans = containerRef.current.querySelectorAll(".letter");
      tl.current = gsap.timeline().to(spans, {
        y: 0,
        stagger: 0.03,
        duration: 1.3,
        ease: "expo.out",
      });
    },
    { scope: containerRef }
  );

  // Diviser le texte en lettres et créer des spans
  const splitText = () => {
    return text.split("").map((letter, index) => (
      <span
        key={index}
        className="letter"
        style={{
          display: "inline-block",
          transform: "translateY(100%)",
        }}
      >
        {letter === " " ? "\u00A0" : letter}
      </span>
    ));
  };

  return <div ref={containerRef}>{splitText()}</div>;
};

export default TextAnimation;
