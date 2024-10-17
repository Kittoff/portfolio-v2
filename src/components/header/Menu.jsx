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
  const [isNavigating, setIsNavigating] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useGSAP(
    () => {
      gsap.set(".holder", { y: 75 });
      tl.current = gsap
        .timeline({
          paused: true,
        })
        .to(".overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isOpen) {
      tl.current.play();
    } else {
      if (!isNavigating) {
        tl.current.reverse();
      }
    }
  }, [isOpen, isNavigating]);

  const handleNavigationStart = () => {
    setIsNavigating(true);
    // Reverse the animation when navigating
    tl.current.reverse();
  };

  const handleLoadComplete = () => {
    setIsNavigating(false);
    // Optionally, you can also reset the menu state here
    setIsOpen(false);
  };

  // Listen for beforeunload event to trigger the reverse animation
  useEffect(() => {
    window.addEventListener("beforeunload", handleNavigationStart);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("beforeunload", handleNavigationStart);
      // You may also want to reset the state here if necessary
      handleLoadComplete();
    };
  }, []);

  return (
    <div ref={container} className="mb-14 text-right py-2 bg-red-400">
      <div>
        <span onClick={toggleMenu} className="p-2 cursor-pointer">
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
          {menuLinks.map((link) => (
            <div
              className="text-5xl link-clip-path"
              onClick={toggleMenu}
              key={link.path}
            >
              <div className="holder relative">
                <Link href={link.path} onClick={handleNavigationStart}>
                  {link.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
