"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "Mon histoire" },
  { path: "/experience", label: "Expériences" },
];

const Menu = () => {
  const container = useRef(null);
  const tl = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useGSAP(
    () => {
      gsap.set(".holder", { y: 120 });
      tl.current = gsap
        .timeline({
          paused: true,
        })
        .to(".overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power3.inOut",
        })
        .to(".holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isOpen]);
  return (
    <div ref={container} className="mb-6 text-right py-2 bg-red-400">
      <div>
        <span onClick={toggleMenu} className="p-2 cursor-pointer">
          {" "}
          Menu
        </span>
      </div>
      <div className="overlay overlay-clip-path bg-green-500 fixed top-0 left-0 w-screen h-screen p-2 px-5 z-10 flex flex-col">
        <div className="cursor-pointer" onClick={toggleMenu}>
          <span onClick={toggleMenu} className="p-2 cursor-pointer">
            Menu
          </span>
        </div>
        <div className="items-center justify-center flex flex-col h-2/3 gap-5">
          {menuLinks.map((link) => {
            return (
              <div
                className="text-step_0 link-clip-path"
                onClick={toggleMenu}
                key={link.path}
              >
                <div className="holder relative">
                  <Link href={link.path}>{link.label}</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
