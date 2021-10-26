import React from "react";

function BenefitItem({ image, heading1, heading2, description, Content }) {
  return (
    <div className="md:flex flex-row-reverse even:flex-row justify-between items-center">
      <div className="md:max-w-[50%]">
        <img src={image} alt={heading2} />
      </div>

      <div className="text-left md:max-w-[40%] mt-14 md:mt-0">
        <p className="font-semibold text-base">{heading1}</p>
        <h1 className="font-bold text-4xl leading-[60px]">{heading2}</h1>
        <p className="my-4">{description}</p>
        <Content/>
      </div>
    </div>
  );
}

export default BenefitItem;
