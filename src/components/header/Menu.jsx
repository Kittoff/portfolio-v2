"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const Menu = () => {
  const { t } = useTranslation();
  const container = useRef(null);
  const tl = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuLinks = [
    { path: "/", label: t("menu_home") },
    { path: "/about", label: t("menu_about") },
    { path: "/experience", label: t("menu_experiences") },
    { path: "/contact", label: t("menu_contact") },
  ];

  useGSAP(
    () => {
      gsap.set(".holder", { y: 120 });
      tl.current = gsap
        .timeline({ paused: true })
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
    { scope: container },
  );

  useEffect(() => {
    if (isOpen) {
      tl.current.play();
      gsap.set("body", { overflow: "hidden" });
    } else {
      tl.current.reverse();
      // .then(() => {
      // });
      gsap.set("body", { overflow: "auto" });
    }
  }, [isOpen]);

  return (
    <div
      data-lenis-stop
      data-lenis-prevent
      ref={container}
      className="fixed z-[999] w-full px-5 py-2 text-right text-menuText"
    >
      <div>
        <span onClick={toggleMenu} className="cursor-pointer p-2">
          <span className="text-secondary">Menu</span>
        </span>
      </div>
      <div className="overlay overlay-clip-path fixed left-0 top-0 z-10 flex h-screen w-screen flex-col bg-menuBg p-2 px-5">
        <div>
          <span onClick={toggleMenu} className="cursor-pointer p-2">
            Menu
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          {menuLinks.map((link) => (
            <div
              className="link-clip-path text-step_h_0"
              onClick={toggleMenu}
              key={link.path}
            >
              <div className="holder relative">
                <Link href={link.path}>{link.label}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
