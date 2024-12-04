import { useState, useRef } from "react";
import gsap from "gsap";

export default function TextDisperse({ children, setBackground }) {
  const [isAnimated, setIsAnimated] = useState(false);
  const charRefs = useRef([]);

  const getChars = (element) => {
    let chars = [];
    const word = element.props.children;
    charRefs.current = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <span
          ref={(el) => (charRefs.current[i] = el)}
          key={char + i}
          style={{
            display: "inline-block",
            ...(char === " " && { width: "0.2em" }), // Ajuste la largeur de l'espace si nécessaire
          }}
        >
          {char === " " ? "\u00A0" : char} {/* Utilise un espace insécable */}
        </span>,
      );
    });
    return chars;
  };

  const manageMouseEnter = () => {
    setIsAnimated(true);
    charRefs.current.forEach((char, i) => {
      gsap.to(char, {
        x: transforms[i].x + "em",
        y: transforms[i].y + "em",
        rotateZ: transforms[i].rotationZ,
        duration: 0.75,
        ease: "power3.out",
        zIndex: 1,
      });
    });
  };

  const manageMouseLeave = () => {
    setIsAnimated(false);
    charRefs.current.forEach((char) => {
      gsap.to(char, {
        x: 0,
        y: 0,
        rotateZ: 0,
        duration: 0.75,
        ease: "power3.out",
        zIndex: 0,
      });
    });
  };

  return (
    <div
      style={{ cursor: "pointer" }}
      onMouseEnter={manageMouseEnter}
      onMouseLeave={manageMouseLeave}
      className="introLine"
    >
      {getChars(children)}
    </div>
  );
}

export const transforms = [
  { x: -0.8, y: -0.3, rotationZ: -2 },
  { x: -0.2, y: -0.2, rotationZ: -1 },
  { x: -0.05, y: 0.1, rotationZ: 2 },
  { x: -0.05, y: -0.1, rotationZ: -3 },
  { x: -0.1, y: 0.3, rotationZ: 3 },
  { x: 0, y: -0.1, rotationZ: 9 },
  { x: 0, y: 0.15, rotationZ: -2 },
  { x: 0, y: 0.15, rotationZ: -7 },
  { x: 0, y: -0.32, rotationZ: 9 },
  { x: 0.1, y: 0.4, rotationZ: 1 },
  { x: 0, y: -0.15, rotationZ: -9 },
  { x: 0.2, y: 0.15, rotationZ: 12 },
  { x: 0.8, y: 0.3, rotationZ: 20 },
];
