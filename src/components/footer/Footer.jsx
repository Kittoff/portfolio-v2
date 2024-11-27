"use client";
import React, { useEffect, useState } from "react";
import Content from "./Content";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("/");
  const { t } = useTranslation();

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  // Vérifiez si le chemin se termine par "/contact"
  const isContactPage = currentPath.endsWith("/contact");

  return (
    <div
      className={`relative ${isContactPage ? "h-[150px]" : "h-[900px]"} `}
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div
        className={`bottom-0 ${isContactPage ? "h-[150px]" : "h-[900px]"} w-full md:fixed`}
      >
        <Content pathname={currentPath} />
      </div>
    </div>
  );
}
