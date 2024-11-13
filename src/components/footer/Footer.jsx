"use client";
import React, { useEffect, useState } from "react";
import Content from "./Content";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);
  return (
    <div
      className={`relative ${currentPath === "/contact" ? "h-[150px]" : "h-[900px]"} `}
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div
        className={`bottom-0 ${currentPath === "/contact" ? "h-[150px]" : "h-[900px]"} w-full md:fixed`}
      >
        <Content pathname={currentPath} />
      </div>
    </div>
  );
}
