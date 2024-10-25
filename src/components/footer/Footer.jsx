import React from "react";
import Content from "./Content";

export default function Footer() {
  return (
    <div
      className="relative h-[900px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="bottom-0 h-[900px] w-full md:fixed">
        <Content />
      </div>
    </div>
  );
}
