import React from "react";
import Content from "./Content";

export default function Footer() {
  return (
    <div
      className="relative md:h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="md:fixed bottom-0 h-screen w-full">
        <Content />
      </div>
    </div>
  );
}