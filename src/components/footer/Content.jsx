import React from "react";
import Time from "./Time";

export default function Content() {
  return (
    <div className="bg-customBlack text-white py-8 px-6 h-full w-full flex flex-col justify-between">
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex shrink-0  justify-between">
      <div className="flex flex-col gap-2">
        <h3 className=" text-step_p__1 uppercase text-[#ffffff80]">Version</h3>
        <p className="flex">2024 © Edition</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className=" text-step_p__1 uppercase text-[#ffffff80]">
          Local Time
        </h3>
        <Time />
      </div>
    </div>
    // <div className="flex justify-between items-end">
    //   <h1 className="text-[14vw] leading-[0.8] mt-10"></h1>
    //   <p>©copyright</p>
    // </div>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-1 gap-20">
      <h2 className="flex flex-col items-start text-step_h_0">
        <div className="flex gap-1 items-center ">
          <div className="w-8 h-8 bg-red-300 rounded-full " />
          Travaillons
        </div>
        <div>ensemble</div>
      </h2>
      {/* <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">About</h3>
        <p>Home</p>
        <p>Projects</p>
        <p>Our Mission</p>
        <p>Contact Us</p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80]">Education</h3>
        <p>News</p>
        <p>Learn</p>
        <p>Certification</p>
        <p>Publications</p>
      </div> */}
    </div>
  );
};
