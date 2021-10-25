import { PlayIcon } from "@heroicons/react/solid";
import React from "react";

function Hero() {
  return (
    // parent div
    <main className="container mt-4 md:flex flex-row-reverse justify-between items-center">
      <div className="md:max-w-[50%]">
        <img src="./images/amico.svg" alt="hero" />
      </div>

       {/* text section */}
      <div className="text-center sm:text-left md:max-w-[40%]">
        <h1 className="font-bold text-4xl leading-[60px]">
          Work at the speed of thought
        </h1>
        <p className="mt-4 text-[18px] leading-[28px] font-normal">
          Tools, tutorials, design and innovation experts, all in one place! The
          most intuitive way to imagine your next user experience.
        </p>
        <div className="mt-8 flex items-center justify-around sm:justify-start sm:space-x-8">
          <button className="primary-button">Get Started</button>
          <p className="font-semibold text-primary whitespace-nowrap flex items-center underline hover:scale-110 active:scale-95 duration-200 cursor-pointer">
            <PlayIcon className="h-8" />
            Watch the Video
          </p>
        </div>
      </div>
    </main>
  );
}

export default Hero;
