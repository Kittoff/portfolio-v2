import React from "react";
import ContentSection from "./ContentSection";
import { sections } from "./sections";

const Experience = () => {
  return (
    <div className="wrap">
      {sections.map((section, index) => (
        <ContentSection key={index} {...section} />
      ))}
    </div>
  );
};

export default Experience;
