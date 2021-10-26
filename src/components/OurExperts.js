import React from "react";

function OurExperts() {
  return (
    <section className="container mt-28 text-center">
      <h2 className="text-[32px] font-bold ">Quick & Easy Process</h2>
      <p className="mt-2 max-w-xl m-auto">
        Do you require some help for your project: Conception workshop,
        prototyping, marketing strategy, landing page, Ux/UI?
      </p>

      <div className="mx-auto mt-8 max-w-5xl grid md:gap-8 grid-cols-1 md:grid-cols-2">
        <ExpertItem
          imgSrc="./images/Avator.png"
          text="I can take care of your pitch"
        />
        <ExpertItem
          imgSrc="./images/Avator-1.png"
          text="I can design you website"
        />

        <ExpertItem
          imgSrc="./images/Avator-2.png"
          text="I can help marketing strategy"
        />

        <ExpertItem
          imgSrc="./images/Avator-3.png"
          text="I can prototype your app"
        />
      </div>

      <button className="primary-button mt-20">Contact our Expert</button>
    </section>
  );
}

export default OurExperts;

function ExpertItem({ imgSrc, text }) {
  return (
    <div className="max-w-md flex items-center even:flex-row-reverse md:flex-row-reverse md:first:flex-row md:last:flex-row">
      <img src={imgSrc} alt="" width="98px" />

      <div className="shadow-lg px-8 py-3 mx-2 max-w-[270px] md:max-w-none text-left rounded-full flex justify-center items-center mt-1.5">
        <p className="font-medium">{text}</p>
      </div>
    </div>
  );
}
