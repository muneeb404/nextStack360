import React from "react";
import StackLogo from "./StackLogo";

const logos = {
  Technologies: [
    { img: "tech1.svg" },
    { img: "tech2.svg" },
    { img: "tech3.svg" },
    { img: "tech4.svg" },
    { img: "tech5.svg" },
    { img: "tech6.svg" },
    { img: "tech7.svg" },
    { img: "tech8.svg" },
    { img: "tech9.svg" },
    { img: "tech10.svg" },
    { img: "tech11.svg" },
    { img: "tech12.svg" },
  ],
  "Cloud Infrastructure": [
    { img: "cloud1.svg" },
    { img: "cloud2.svg" },
    { img: "cloud3.svg" },
    { img: "cloud4.svg" },
    { img: "cloud5.svg" },
    { img: "cloud6.svg" },
    { img: "cloud7.svg" },
    { img: "cloud8.svg" },
    { img: "cloud9.svg" },
    { img: "cloud10.svg" },
    { img: "cloud11.svg" },
    { img: "cloud12.svg" },
  ],
  Devops: [
    { img: "dev1.svg" },
    { img: "dev2.svg" },
    { img: "dev3.svg" },
    { img: "dev4.svg" },
    { img: "dev5.svg" },
    { img: "dev6.svg" },
    { img: "dev7.svg" },
    { img: "dev8.svg" },
    { img: "dev9.svg" },
    { img: "dev10.svg" },
    { img: "dev11.svg" },
    { img: "dev12.svg" },
  ],
};

function TechStackLogos({ activeCategory }) {
  const categoryLogos = logos[activeCategory] || [];

  return (
    <div className="flex flex-col">
      <div className="flex gap-7 py-7 flex-wrap flex-grow-6 justify-center">
        {categoryLogos.map((logo, index) => (
          <StackLogo key={index} img={logo.img} />
        ))}
      </div>
    </div>
  );
}

export default TechStackLogos;
